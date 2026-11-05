/* Pop-up de promoção (usado no site e na pré-visualização do admin) */
window.KeroPromo = (function(){
  const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const money = n => n.toLocaleString("pt-BR",{minimumFractionDigits:2,maximumFractionDigits:2});
  const fmt = p => p.type==="off" ? "R$ "+money(+p.value) : (+p.value)+"%";
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let open = null;

  function confetti(canvas, stop){
    const x = canvas.getContext("2d"), dpr = Math.min(2,devicePixelRatio||1);
    const W = canvas.width = innerWidth*dpr, H = canvas.height = innerHeight*dpr;
    const cols = ["#e6850a","#ffb43a","#ffd27a","#fff3df","#ff6b57"];
    const ps = Array.from({length:130},()=>({x:W/2+(Math.random()-.5)*W*.2,y:H*.42,vx:(Math.random()-.5)*16*dpr,vy:-(6+Math.random()*13)*dpr,w:(5+Math.random()*7)*dpr,h:(3+Math.random()*5)*dpr,r:Math.random()*6,vr:(Math.random()-.5)*.4,c:cols[(Math.random()*cols.length)|0],life:0}));
    let t0 = performance.now(), raf;
    (function tick(now){
      const dt = Math.min(.04,(now-t0)/1000); t0 = now; x.clearRect(0,0,W,H);
      let alive = false;
      ps.forEach(p=>{ p.life += dt; p.vy += 22*dpr*dt*3.2; p.vx *= .992; p.x += p.vx; p.y += p.vy*dt*60/3.2*.55; p.r += p.vr;
        if(p.y<H+30){ alive = true; x.save(); x.translate(p.x,p.y); x.rotate(p.r); x.globalAlpha = Math.max(0,1-p.life/4.2); x.fillStyle = p.c; x.fillRect(-p.w/2,-p.h/2,p.w,p.h); x.restore(); } });
      if(alive && !stop.v) raf = requestAnimationFrame(tick); else x.clearRect(0,0,W,H);
    })(t0);
  }

  function show(p, o={}){
    close(true);
    const msg = esc(p.message||"").replace(/\{desconto\}/g,"<b>"+esc(fmt(p))+"</b>");
    const wrap = document.createElement("div");
    wrap.className = "promo-scrim";
    wrap.setAttribute("role","dialog"); wrap.setAttribute("aria-modal","true"); wrap.setAttribute("aria-labelledby","promoT");
    wrap.innerHTML = `<canvas class="promo-confetti" aria-hidden="true"></canvas>
      <div class="promo-card">
        <button class="promo-x" type="button" aria-label="Fechar">&times;</button>
        <div class="promo-rays" aria-hidden="true"></div>
        <h2 id="promoT">${esc(p.title||"Parabéns!")}</h2>
        <div class="promo-num" aria-hidden="true">${p.type==="off"?`<span class="cur">R$</span>`:""}<b data-to="${+p.value}">${reduce?(+p.value):0}</b>${p.type==="off"?"":"<span class=\"pct\">%</span>"}</div>
        <p class="promo-off">de desconto</p>
        <p class="promo-msg">${msg}</p>
        ${p.code?`<button class="promo-code" type="button" aria-label="Copiar cupom ${esc(p.code)}"><span>Cupom</span><b>${esc(p.code)}</b><em>copiar</em></button>`:""}
        <p class="promo-time" hidden></p>
        <button class="btn promo-cta" type="button">Usar meu desconto</button>
        <button class="promo-skip" type="button">Agora não</button>
      </div>`;
    document.body.appendChild(wrap);
    document.body.style.overflow = "hidden";
    const stop = {v:false}; const prevFocus = document.activeElement;
    requestAnimationFrame(()=>wrap.classList.add("in"));
    if(!reduce){
      const num = wrap.querySelector(".promo-num b"), to = +p.value, t0 = performance.now()+350;
      (function tick(now){ const k = Math.min(1,Math.max(0,(now-t0)/1000)); num.textContent = (to%1?(to*(1-Math.pow(1-k,3))).toFixed(2):Math.round(to*(1-Math.pow(1-k,3)))); if(k<1) requestAnimationFrame(tick); else num.textContent = to%1?money(to):to; })(performance.now());
      setTimeout(()=>confetti(wrap.querySelector(".promo-confetti"),stop),300);
    }
    let timer = null;
    if(p.endsAt){
      const el = wrap.querySelector(".promo-time"), end = Date.parse(p.endsAt);
      const upd = () => { const s = Math.max(0,Math.floor((end-Date.now())/1000)); const d = Math.floor(s/86400), h = Math.floor(s%86400/3600), m = Math.floor(s%3600/60), sec = s%60, z = n => String(n).padStart(2,"0");
        el.textContent = "Termina em " + (d?d+"d ":"") + z(h)+":"+z(m)+":"+z(sec); el.hidden = false; };
      upd(); timer = setInterval(upd,1000);
    }
    function close(silent){
      if(!open) return; const w = open; open = null; stop.v = true; clearInterval(timer);
      w.classList.remove("in"); document.body.style.overflow = "";
      setTimeout(()=>w.remove(),350);
      if(!silent){ o.onClose && o.onClose(); prevFocus && prevFocus.focus && prevFocus.focus(); }
    }
    open = wrap; wrap._close = close;
    const useIt = () => { close(); o.onUse && o.onUse(); };
    wrap.querySelector(".promo-cta").onclick = useIt;
    wrap.querySelector(".promo-skip").onclick = () => close();
    wrap.querySelector(".promo-x").onclick = () => close();
    wrap.addEventListener("click",e=>{ if(e.target===wrap) close(); });
    const cb = wrap.querySelector(".promo-code");
    if(cb) cb.onclick = () => { navigator.clipboard && navigator.clipboard.writeText(p.code).catch(()=>{}); cb.querySelector("em").textContent = "copiado!"; setTimeout(()=>cb.querySelector("em").textContent = "copiar",1600); };
    wrap.addEventListener("keydown",e=>{
      if(e.key==="Escape") close();
      if(e.key==="Tab"){ const f = [...wrap.querySelectorAll("button")]; const i = f.indexOf(document.activeElement); if(e.shiftKey && i<=0){ e.preventDefault(); f[f.length-1].focus(); } else if(!e.shiftKey && i===f.length-1){ e.preventDefault(); f[0].focus(); } }
    });
    setTimeout(()=>wrap.querySelector(".promo-cta").focus(),450);
  }
  function close(silent){ if(open && open._close) open._close(silent); }
  const DEFAULT = {active:false,type:"pct",value:10,code:"KERO10",title:"Parabéns!",message:"Você acabou de ganhar {desconto} de desconto em qualquer pedido.",endsAt:null,updatedAt:0};
  /* com o servidor (node server.js) a promoção vem da API; numa hospedagem só de arquivos, fica salva neste navegador */
  async function load(){
    try{ const r = await fetch("/api/promo",{cache:"no-store"}); if(r.ok && (r.headers.get("content-type")||"").includes("json")) return {p:await r.json(),local:false}; }catch(e){}
    let s = null; try{ s = JSON.parse(localStorage.getItem("keroPromoLocal")); }catch(e){}
    return {p:{...DEFAULT,...(s||{})},local:true};
  }
  function saveLocal(b){
    const type = b.type==="off" ? "off" : "pct", value = Number(b.value);
    if(!(value>0)) throw new Error("Informe um valor de desconto maior que zero.");
    if(type==="pct" && value>100) throw new Error("O desconto em % não pode passar de 100.");
    if(type==="off" && value>1000) throw new Error("O desconto em reais não pode passar de 1000.");
    const code = String(b.code||"").toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,20);
    if(!code) throw new Error("Informe um código de cupom (letras e números).");
    let endsAt = null; if(b.endsAt){ const t = Date.parse(b.endsAt); if(isNaN(t)) throw new Error("Data de término inválida."); if(b.active && t<=Date.now()) throw new Error("A data de término já passou. Apague a data ou escolha uma data futura."); endsAt = new Date(t).toISOString(); }
    const v = {active:!!b.active,type,value:Math.round(value*100)/100,code,title:String(b.title||"Parabéns!").slice(0,60),message:String(b.message||DEFAULT.message).slice(0,220),endsAt,updatedAt:Date.now()};
    localStorage.setItem("keroPromoLocal",JSON.stringify(v)); return v;
  }
  return {show, close, fmt, money, load, saveLocal, DEFAULT};
})();
