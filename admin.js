const $ = s => document.querySelector(s);
let PIN = sessionStorage.getItem("keroPin") || "", LOCAL = false;

function toast(msg, bad){ const t = $("#toast"); t.textContent = msg; t.classList.toggle("bad",!!bad); t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(()=>t.classList.remove("show"),2800); }
function toLocalInput(iso){ if(!iso) return ""; const d = new Date(iso), z = n => String(n).padStart(2,"0"); return `${d.getFullYear()}-${z(d.getMonth()+1)}-${z(d.getDate())}T${z(d.getHours())}:${z(d.getMinutes())}`; }
function form(){
  return { active:$("#fActive").checked, type:$("#fType").value, value:parseFloat(String($("#fValue").value).replace(",",".")), code:$("#fCode").value, title:$("#fTitle").value, message:$("#fMsg").value, endsAt:$("#fEnds").value ? new Date($("#fEnds").value).toISOString() : null };
}
function fill(p){
  $("#fActive").checked = !!p.active; $("#fType").value = p.type; $("#fValue").value = p.value; $("#fCode").value = p.code; $("#fTitle").value = p.title; $("#fMsg").value = p.message; $("#fEnds").value = toLocalInput(p.endsAt);
  typeUi(); status(p);
}
function typeUi(){ const off = $("#fType").value==="off"; $("#valueLabel").textContent = off ? "Desconto (R$)" : "Desconto (%)"; $("#fValue").step = off ? "0.5" : "1"; $("#fValue").max = off ? "1000" : "100"; }
function status(p){
  const expired = p.endsAt && Date.parse(p.endsAt) < Date.now(), live = p.active && !expired;
  $("#statusRow").classList.toggle("live",live);
  $("#stTitle").textContent = live ? "Promoção no ar" : (p.active && expired ? "Promoção encerrada" : "Promoção desligada");
  $("#stSub").textContent = live ? `${KeroPromo.fmt(p)} de desconto com o cupom ${p.code}. Os clientes veem o pop-up.` : (p.active && expired ? "O prazo terminou. Defina uma nova data para reativar." : "Os clientes não veem nenhum pop-up.");
}
async function api(path, opt={}){
  const r = await fetch(path,{ ...opt, headers:{ "Content-Type":"application/json", "x-admin-pin":PIN, ...(opt.headers||{}) } });
  const j = await r.json().catch(()=>({})); if(!r.ok) throw Object.assign(new Error(j.error||"Erro"),{status:r.status}); return j;
}
async function enter(){
  $("#loginView").hidden = true; $("#panelView").hidden = false;
  try{ fill(await api("/api/promo")); }catch(e){ toast("Não foi possível carregar a promoção.",true); }
}
function showLogin(){ $("#panelView").hidden = true; $("#loginView").hidden = false; $("#pin").focus(); }

$("#loginForm").addEventListener("submit",async e=>{
  e.preventDefault(); $("#loginErr").textContent = "";
  try{ const pin = $("#pin").value; await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin})}).then(async r=>{ if(!r.ok) throw new Error("PIN incorreto. Confira e tente de novo."); });
    PIN = $("#pin").value; sessionStorage.setItem("keroPin",PIN); enter(); }
  catch(err){ $("#loginErr").textContent = err.message; $("#pin").select(); }
});
$("#logout").onclick = ()=>{ sessionStorage.removeItem("keroPin"); PIN = ""; $("#pin").value = ""; showLogin(); };
$("#fType").addEventListener("change",typeUi);
$("#save").onclick = async ()=>{
  const f0 = form(); if(f0.active && f0.endsAt && Date.parse(f0.endsAt) <= Date.now()){ toast("A data de término já passou. Apague a data ou escolha uma data futura.",true); $("#fEnds").focus(); return; }
  try{ const p = LOCAL ? KeroPromo.saveLocal(form()) : await api("/api/promo",{method:"POST",body:JSON.stringify(form())}); fill(p); toast(p.active ? "Publicado! Os clientes já podem ver." : "Salvo. A promoção está desligada."); }
  catch(e){ if(e.status===401){ toast("Sessão expirada. Entre de novo.",true); showLogin(); } else toast(e.message,true); }
};
$("#fActive").addEventListener("change",()=>status({ ...form(), active:$("#fActive").checked }));
$("#preview").onclick = ()=>{ const f = form(); if(!(f.value>0)){ toast("Informe o valor do desconto.",true); return; } KeroPromo.show({ ...f, code:(f.code||"").toUpperCase().replace(/[^A-Z0-9]/g,"") }); };

(async function init(){
  const L = await KeroPromo.load();
  if(L.local){ LOCAL = true; $("#localNote").hidden = false; $("#logout").hidden = true; $("#loginView").hidden = true; $("#panelView").hidden = false; fill(L.p); return; }
  if(!PIN) return showLogin();
  try{ const r = await fetch("/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pin:PIN})}); if(!r.ok) throw 0; enter(); }
  catch(e){ sessionStorage.removeItem("keroPin"); PIN = ""; showLogin(); }
})();
