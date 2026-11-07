if('scrollRestoration' in history) history.scrollRestoration = 'manual';
if(!location.hash) window.scrollTo(0,0);
﻿/* ============ DADOS (copiados do cardápio da Kero+ no Cardápio Web) ============ */
const COMBOS = [
  {n:"Combo P - Smash",d:"2 Smash K+, porção de batata M, 2 refrigerantes lata da sua escolha",p:57,tag:"P"},
  {n:"Combo P - Duplo Burger",d:"2 Duplo Burger, 1 batata M, 1 refrigerante 1L",p:60,tag:"P"},
  {n:"Combo M - Cheese Burger",d:"2 Cheese Burger, 1 batata M, 1 refrigerante",p:65,tag:"M"},
  {n:"Combo M - Double Cheese",d:"2 Double Cheese Smash, 1 batata M, 1 refrigerante",p:83,tag:"M"},
  {n:"Combo G - Smash",d:"4 Smash K+, 1 batata M, 4 refrigerantes lata",p:104,tag:"G"},
  {n:"Combo G - Double Cheese",d:"4 Double Cheese Smash, 1 batata M, 4 refrigerantes lata",p:156,tag:"G"},
];
const MENU = [
 {cat:"Burgers",items:[
  ["Kero+ Burger","Pão, blend (120g), queijo prato, fatias de bacon, cebola caramelizada, molho especial e salada.",30],
  ["Especial Kero+","Pão, blend especial (200g) recheado com queijo prato, fatias de bacon, molho barbecue, maionese de alho e salada.",33],
  ["Especial Three Cheese","Pão, blend especial (200g) recheado com queijo mussarela, queijo cheddar, queijo prato, molho especial e bacon.",37],
  ["Baiano Burger","Pão amanteigado, blend (120g), queijo mussarela, calabresa, pimenta calabresa, cebola grelhada, maionese de alho e salada.",24],
  ["Smash K+","Pão, blend smash (80g), queijo prato e maionese de ervas.",18],
  ["Double Cheese Smash","Pão, 2 blends smash (80g), queijo prato, queijo cheddar, fatias de bacon e maionese de bacon.",31],
  ["Double Cheddar Smash","Pão, 2 blends smash (80g), queijo cheddar, molho K+, picles e bacon.",34],
  ["Cheddar Bacon","Pão, blend (120g), queijo cheddar, fatias de bacon, maionese de bacon e salada.",29],
  ["Cheddar K+","Pão, blend (120g), queijo cheddar, bacon, molho K+, picles, salada e cebola roxa.",30],
  ["Cheddar BBQ","Pão, blend (120g), queijo cheddar, cebola caramelizada, molho barbecue e fatias de bacon.",30],
  ["Duplo Cheddar Bacon","Pão, 2 blends (120g), queijo cheddar, fatias de bacon, maionese de bacon e salada.",41],
  ["Cheese Burger","Pão, blend (120g), queijo mussarela, maionese de ervas e molho barbecue.",22],
  ["Cheese Salada","Pão, blend (120g), queijo mussarela, salada, cebola roxa.",24],
  ["Cheese Bacon","Pão, blend (120g), queijo mussarela, fatias de bacon, salada, cebola roxa e molho de bacon.",27],
  ["Fumacento Burger","Pão brioche, blend 120g, fatias de bacon, cheddar defumado, catupiry original.",30,{out:1}],
  ["Ananás Chilli Burger","Pão brioche, blend 120g, queijo coalho, fatias de bacon, geleia artesanal de abacaxi com pimenta, rúcula.",34],
  ["Danado de Bom","Pão brioche, blend 120g, queijo coalho chapeado 120g, melaço de cana, carne seca, banana da terra, molho cremoso de cream cheese.",55],
  ["Smash Fit","Pão brioche, blend smash 80g, queijo mussarela, rúcula, tomate.",20],
  ["Burger Frango Fit","Pão brioche, burger de frango 120g, queijo mussarela, rúcula, tomate.",22],
 ]},
 {cat:"Tradicionais",items:[
  ["Galinhada","Pão, frango, queijo, presunto, bacon, cheddar, requeijão cremoso e salada.",30],
  ["X-Frango","Pão, frango, queijo, milho, ervilha, maionese de ervas e salada.",22],
  ["Galinha Mista","Pão, frango, filé, queijo, presunto, milho, ervilha, molho barbecue e salada.",31],
  ["X-File","Pão amanteigado, filé, queijo, molho barbecue, cebola e salada.",24],
  ["File Egg","Pão amanteigado, filé, bacon, ovo, queijo, maionese de alho e salada.",29],
  ["Hiper","Pão, hambúrguer, ovo, bacon, queijo, presunto, milho, maionese de bacon e salada.",27],
  ["American Bacon","Pão, bacon, queijo, presunto, ovo, milho, maionese de bacon e salada.",24],
  ["X-Bacon","Pão, hambúrguer, queijo, bacon, maionese de bacon e salada.",22],
  ["X-Egg Bacon","Pão, hambúrguer, queijo, ovo, bacon, maionese de bacon e salada.",24],
  ["American Burguer","Pão, hambúrguer, ovo, queijo, presunto, milho, maionese de ervas e salada.",19],
  ["Duplo Burguer","Pão, 2 hambúrgueres, 2 queijos, milho, requeijão cremoso e salada.",21],
  ["Baianinho Burguer","Pão amanteigado, calabresa, cebola grelhada, queijo mussarela, ovo, pimenta calabresa, maionese de alho e salada.",20],
  ["X-Salada","Pão, hambúrguer, queijo, milho, ervilha, maionese de ervas e salada.",17],
  ["Misto Quente","Pão, queijo, presunto e orégano.",10],
  ["Bauru","Pão amanteigado, queijo, presunto, orégano e salada.",12],
  ["Miss Burguer","Pão, hambúrguer, queijo e presunto.",13],
  ["X-Egg Burguer","Pão, hambúrguer, ovo, queijo e batata palha.",15],
  ["X-Tudo K+","Pão, hambúrguer, queijo, presunto, 1 ovo, filé, frango, calabresa, salsicha, bacon, milho, ervilha, cheddar, requeijão cremoso e salada.",33],
  ["K+ Double em 1 pão","Pão, 2 hambúrgueres, 2 queijos, 2 presuntos, 2 ovos, filé, frango, calabresa, salsicha, milho, ervilha, cheddar, requeijão cremoso e salada.",42],
  ["K+ Double em 2 pães","Pão, 2 hambúrgueres, 2 queijos, 2 presuntos, 2 ovos, filé, frango, bacon, calabresa, salsicha, milho, ervilha, cheddar, requeijão cremoso e salada.",50],
  ["X-Dog Bacon","Pão, hambúrguer, bacon, salsicha, ovo, presunto, queijo, cheddar, salada.",24],
  ["X-Burger","Pão, hambúrguer, queijo mussarela.",12],
 ]},
 {cat:"Batatas",items:[
  ["Batata Frita","Escolha o tamanho: P (100g), M (200g) ou G (300g).",17,{sizes:[["P","100g",12],["M","200g",17],["G","300g",23]]}],
  ["Batata com carne seca","Batata, carne seca, catupiry original e cebolinha picada.",23,{from:1}],
  ["Batata com cheddar e calabresa","Batata, cheddar Polenghi e calabresa.",18,{from:1}],
  ["Batata com cheddar e farofa de bacon","Batata, catupiry original, cheddar Polenghi e farofa de bacon.",20,{from:1}],
  ["Batata com frango e catupiry","Batata, frango e catupiry original.",21,{from:1}],
 ]},
 {cat:"Entradas",items:[
  ["Mini Bolinhos de Bacalhau","Bolinhos de bacalhau fritos com molho especial da casa. Porção com 10 unidades.",23],
  ["Mini Coxinha de Charque","Acompanha molho barbecue artesanal da casa. Porção com 10 unidades.",18],
  ["Mini Churros de Doce de Leite","Ideal para pedir como sobremesa. Porção com 10 unidades.",20],
  ["Mini Coxinha de Frango com Requeijão","Acompanha maionese de ervas artesanal da casa. Porção com 10 unidades.",15],
  ["Nuggets Supreme","Nuggets de frango fritos com o molho K+. Porção com 10 unidades.",15],
 ]},
 {cat:"Bebidas",items:[
  ["Coca-Cola 1L","",10],["Coca-Cola Zero 1L","",10],["Coca-Cola 600ml","",8],["Coca-Cola Zero 600ml","",8],
  ["Coca-Cola 350ml","",6],["Coca-Cola Zero 350ml","",6],["Coca-Cola Zero 200ml","",4],["Coca-Cola 200ml","",4],
  ["Guaraná Antarctica 1L","",9],["Guaraná Antarctica Zero 1L","",9],["Guaraná Antarctica 350ml","",6],["Guaraná Antarctica Zero 350ml","",6],
  ["Guaraná Antarctica 200ml","",4,{out:1}],["Fanta 350ml","",6],
  ["Suco de Morango","300 ml, 100% natural da fruta e água. Feito na hora.",10],
  ["Suco de Abacaxi com Hortelã","300 ml, 100% natural da fruta e água. Feito na hora.",10],
  ["Água Mineral","",3],["Água com Gás","",4],["H2O Limoneto","",7],
 ]},
 {cat:"Cervejas e drinks",items:[
  ["Heineken Long Neck 330ml","",12],["Eisenbahn Long Neck 355ml","",10],["Michelob Ultra Long Neck 330ml","",12],
  ["Ice Cabaré Frutas Vermelhas 275ml","",12,{out:1}],["Ice Cabaré Limão 275ml","",12,{out:1}],
 ]},
 {cat:"Chicletes",items:[
  ["Trident Tutti Frutti","Sem açúcar.",4],["Trident Menta","Sem açúcar.",4],["Trident Melancia","Sem açúcar.",4],["Chiclets Hortelã","",0.5],
 ]},
];

/* Cupons de demonstração: troque pelos reais da loja */
const COUPONS = {KERO10:{type:"pct",v:10,label:"10% de desconto"},BEMVINDO:{type:"off",v:5,label:"R$ 5,00 de desconto"}};
const WHATSAPP = "5577998237878";
const HOURS = [["Segunda",null],["Terça",[19,23]],["Quarta",[19,23]],["Quinta",[19,23]],["Sexta",[19,23]],["Sábado",[19,23]],["Domingo",[19,23]]];

const $ = s => document.querySelector(s);
const brl = n => n.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const esc = s => s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

/* ============ STATUS ABERTO/FECHADO (horário da Bahia) ============ */
function bahiaNow(){
  const f = new Intl.DateTimeFormat("en-US",{timeZone:"America/Bahia",weekday:"short",hour:"numeric",minute:"numeric",hour12:false}).formatToParts(new Date());
  const g = t => f.find(p=>p.type===t).value;
  const dow = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].indexOf(g("weekday"));
  return {dow, h:(+g("hour"))%24 + (+g("minute"))/60};
}
function isOpen(){
  const {dow,h} = bahiaNow(), today = HOURS[(dow+6)%7][1];
  return !!today && h>=today[0] && h<today[1];
}
function renderStatus(){
  const el = $("#status"), open = isOpen(), {dow,h} = bahiaNow();
  el.classList.toggle("open",open);
  if(open) el.textContent = "Aberto agora";
  else{
    const t = HOURS[(dow+6)%7][1];
    el.textContent = (t && h<t[0]) ? "Fechado · abrimos hoje às 19h" : "Fechado · abrimos às 19h";
  }
  $("#closedNote").hidden = open;
}
function renderHours(){
  const {dow} = bahiaNow(), idx = (dow+6)%7;
  $("#hours").innerHTML = HOURS.map(([d,t],i)=>`<li class="${i===idx?"today":""}"><span>${d}</span>${t?`<span>${t[0]}:00 às ${t[1]}:00</span>`:`<span class="off">Fechado</span>`}</li>`).join("");
}

/* ============ RENDER: COMBOS + CARDÁPIO ============ */

/* ============ OPÇÕES DOS LANCHES (copiadas do cardápio da Kero+) ============ */
const G_MOLHOS = {title:"Molhos Artesanais",max:5,options:[
  ["Maionese verde","30g em sachê",3],["Maionese de alho","30g em sachê",3],["Maionese de Bacon","direto no lanche",3],
  ["Molho Barbecue","direto no lanche",3.5],["Molho Especial","agridoce, direto no lanche",3.5],["Molho Kero+","toque de picles, direto no lanche",3.5]]};
const G_ADIC = {title:"Adicionais",max:15,options:[
  ["Frango","",6],["Filé","",6],["Bacon fatias","",5],["Calabresa","",4],["Salsicha","",1.5],["Ovo","",1.5],["Queijo mussarela","",3.5],["Presunto","",3.5],
  ["Hambúrguer","",3],["Picles","",5],["Salada","",2],["Milho","",1],["Carne seca","",8],["Blend Smash 80g","",7],["Blend 120g","",9],["Cebola caramelizada","",4],
  ["Requeijão cremoso","",1],["Cheddar cremoso","",1],["Catupiry Original","",4],["Cheddar Polenghi","",3.5],["Batata Palha","",1.5],["Ervilha","",1],["Bacon cubos","",5],
  ["Queijo cheddar","",3.5],["Queijo prato","",3.5]]};
const G_COMBO = {title:"Combo batata simples + refrigerante 350ml",max:1,options:[
  ["Coca-Cola 350ml","",13],["Coca-Cola Zero 350ml","",13],["Fanta 350ml","",12],["Guaraná Antarctica 350ml","",12,{out:1}]]};
const sizeG = (a,b,c) => ({title:"Tamanho",max:1,req:true,abs:true,options:[["P - 180g","",a],["M - 250g","",b],["G - 400g","",c]]});
const ITEM_GROUPS = {};
["Galinhada","X-Frango","Galinha Mista","X-File","File Egg","Hiper","American Bacon","X-Bacon","X-Egg Bacon","American Burguer","Duplo Burguer","Baianinho Burguer","X-Salada","Misto Quente","Bauru","Miss Burguer","X-Egg Burguer","X-Tudo K+","K+ Double em 1 pão","K+ Double em 2 pães","X-Burger"].forEach(n=>ITEM_GROUPS[n]=[G_MOLHOS,G_ADIC]);
["Kero+ Burger","Especial Kero+","Especial Three Cheese","Baiano Burger","Smash K+","Double Cheese Smash","Double Cheddar Smash","Cheddar Bacon","Cheddar K+","Cheddar BBQ","Duplo Cheddar Bacon","Cheese Burger","Cheese Salada","Cheese Bacon","Smash Fit"].forEach(n=>ITEM_GROUPS[n]=[G_MOLHOS,G_ADIC,G_COMBO]);
["Ananás Chilli Burger","Danado de Bom","Burger Frango Fit"].forEach(n=>ITEM_GROUPS[n]=[G_MOLHOS,G_COMBO,G_ADIC]);
["Mini Bolinhos de Bacalhau","Mini Coxinha de Charque","Mini Coxinha de Frango com Requeijão"].forEach(n=>ITEM_GROUPS[n]=[G_MOLHOS]);
ITEM_GROUPS["Batata com carne seca"] = [sizeG(23,28,37)];
ITEM_GROUPS["Batata com cheddar e calabresa"] = [sizeG(18,21,31)];
ITEM_GROUPS["Batata com cheddar e farofa de bacon"] = [sizeG(20,23,32)];
ITEM_GROUPS["Batata com frango e catupiry"] = [sizeG(21,27,36)];

let uid = 0; const PRODUCTS = {};
const reg = (n,p,from) => { const id = "p"+(uid++); PRODUCTS[id] = {n,p,img:PHOTOS[n]}; return id; };

const PHOTOS = {"Galinhada":"assets/fotos/galinhada.jpg",
 "X-Frango":"assets/fotos/01.jpg","Galinha Mista":"assets/fotos/02.jpg","X-File":"assets/fotos/03.jpg","File Egg":"assets/fotos/04.jpg","Hiper":"assets/fotos/05.jpg",
 "American Bacon":"assets/fotos/06.jpg","X-Bacon":"assets/fotos/07.jpg","X-Egg Bacon":"assets/fotos/08.jpg","American Burguer":"assets/fotos/09.jpg","Duplo Burguer":"assets/fotos/10.jpg",
 "Baianinho Burguer":"assets/fotos/11.jpg","X-Salada":"assets/fotos/12.jpg","Misto Quente":"assets/fotos/13.jpg","Bauru":"assets/fotos/14.jpg","Miss Burguer":"assets/fotos/15.jpg",
 "X-Egg Burguer":"assets/fotos/16.jpg","X-Tudo K+":"assets/fotos/17.jpg","K+ Double em 1 pão":"assets/fotos/18.jpg","K+ Double em 2 pães":"assets/fotos/19.jpg","X-Dog Bacon":"assets/fotos/20.jpg"};
Object.assign(PHOTOS,{"Água Mineral":"assets/bebidas/beb01.jpg","Água com Gás":"assets/bebidas/beb02.jpg","H2O Limoneto":"assets/bebidas/beb03.jpg","Heineken Long Neck 330ml":"assets/bebidas/alc01.jpg","Eisenbahn Long Neck 355ml":"assets/bebidas/alc02.jpg","Michelob Ultra Long Neck 330ml":"assets/bebidas/alc03.jpg","Ice Cabaré Frutas Vermelhas 275ml":"assets/bebidas/alc04.jpg","Ice Cabaré Limão 275ml":"assets/bebidas/alc05.jpg","Trident Tutti Frutti":"assets/bebidas/chi01.jpg","Trident Menta":"assets/bebidas/chi02.jpg","Trident Melancia":"assets/bebidas/chi03.jpg","Chiclets Hortelã":"assets/bebidas/chi04.jpg","Coca-Cola Zero 1L":"assets/bebidas/ref01.jpg","Coca-Cola Zero 600ml":"assets/bebidas/ref02.jpg","Coca-Cola 600ml":"assets/bebidas/ref03.jpg","Guaraná Antarctica 1L":"assets/bebidas/ref04.jpg","Coca-Cola 350ml":"assets/bebidas/ref05.jpg","Guaraná Antarctica Zero 1L":"assets/bebidas/ref06.jpg","Guaraná Antarctica 350ml":"assets/bebidas/ref07.jpg","Coca-Cola Zero 200ml":"assets/bebidas/ref08.jpg","Coca-Cola Zero 350ml":"assets/bebidas/ref09.jpg","Fanta 350ml":"assets/bebidas/ref10.jpg","Coca-Cola 1L":"assets/bebidas/ref11.jpg","Guaraná Antarctica Zero 350ml":"assets/bebidas/ref12.jpg","Guaraná Antarctica 200ml":"assets/bebidas/ref13.jpg","Coca-Cola 200ml":"assets/bebidas/ref14.jpg","Suco de Morango":"assets/bebidas/suc01.jpg","Suco de Abacaxi com Hortelã":"assets/bebidas/suc02.jpg"});
const photoHTML = (n,badge,out) => `<div class="photo" style="--bg:url('${PHOTOS[n]||""}')">${badge?`<span class="badge">${badge}</span>`:""}${out?`<span class="badge red">Esgotado</span>`:""}${PHOTOS[n]?`<img src="${PHOTOS[n]}" alt="${esc(n)}" loading="lazy" onload="if(this.naturalHeight/this.naturalWidth>1.15)this.parentNode.classList.add('contain')">`:`<div class="nophoto"><span>SEM FOTO</span></div>`}</div>`;

Object.assign(PHOTOS,{"Kero+ Burger":"assets/fotos/b01.jpg","Especial Kero+":"assets/fotos/b02.jpg","Especial Three Cheese":"assets/fotos/b03.jpg","Baiano Burger":"assets/fotos/b04.jpg","Smash K+":"assets/fotos/b05.jpg","Double Cheese Smash":"assets/fotos/b06.jpg","Double Cheddar Smash":"assets/fotos/b07.jpg","Cheddar Bacon":"assets/fotos/b08.jpg","Cheddar K+":"assets/fotos/b09.jpg","Cheddar BBQ":"assets/fotos/b10.jpg","Duplo Cheddar Bacon":"assets/fotos/b11.jpg","Cheese Burger":"assets/fotos/b12.jpg","Cheese Salada":"assets/fotos/b13.jpg","Cheese Bacon":"assets/fotos/b14.jpg","Batata Frita":"assets/fotos/b15.jpg","Batata Frita P":"assets/fotos/b15.jpg","Batata Frita M":"assets/fotos/b15.jpg","Batata Frita G":"assets/fotos/b15.jpg","Batata com carne seca":"assets/fotos/b16.jpg","Batata com cheddar e calabresa":"assets/fotos/b17.jpg","Batata com cheddar e farofa de bacon":"assets/fotos/b18.jpg","Batata com frango e catupiry":"assets/fotos/b19.jpg"});
/* Mostrar também os itens sem foto? (false = só aparece quem tem foto) */
const SHOW_WITHOUT_PHOTO = false;
if(!SHOW_WITHOUT_PHOTO){
  for(let i=COMBOS.length-1;i>=0;i--) if(!PHOTOS[COMBOS[i].n]) COMBOS.splice(i,1);
  for(let i=MENU.length-1;i>=0;i--){ MENU[i].items = MENU[i].items.filter(it=>PHOTOS[it[0]]); if(!MENU[i].items.length) MENU.splice(i,1); }
}
$("#combos").innerHTML = COMBOS.map(c=>{
  const id = reg(c.n,c.p);
  return `<article class="item combo">${photoHTML(c.n,"Combo "+c.tag)}<div class="body"><h4>${esc(c.n)}</h4><p>${esc(c.d)}</p>
  <div class="foot2"><span class="price">${brl(c.p)}</span><button class="add" data-add="${id}">Adicionar</button></div></div></article>`;
}).join("");

function itemHTML(it){
  const [n,d,p,o={}] = it;
  let id, sizes = "", price = p;
  if(o.sizes){
    const ids = o.sizes.map(z=>reg(n+" "+z[0], z[2]));
    id = ids[1]; price = o.sizes[1][2];
    sizes = `<div class="sizes" role="group" aria-label="Tamanho">${o.sizes.map((z,i)=>`<button type="button" class="size ${i===1?"on":""}" data-size="${ids[i]}" data-price="${z[2]}"><b>${z[0]}</b><small>${z[1]}</small></button>`).join("")}</div>`;
  } else id = reg(n,p);
  if(!o.sizes){ PRODUCTS[id].d = d; PRODUCTS[id].groups = ITEM_GROUPS[n]; }
  return `<article class="item ${o.out?"out":""}" data-name="${esc((n+" "+d).toLowerCase())}">
    ${photoHTML(n,"",o.out)}<div class="body"><h4>${esc(n)}</h4>${d?`<p>${esc(d)}</p>`:`<p></p>`}${sizes}
    <div class="foot2"><span class="price">${o.from?"<small>a partir de</small>":""}<span class="pv">${brl(price)}</span></span>
    ${o.out?`<button class="add" disabled>Esgotado</button>`:`<button class="add" data-add="${id}" aria-label="Adicionar ${esc(n)}">Adicionar</button>`}</div></div></article>`;
}
$("#menuList").innerHTML = MENU.map((c,i)=>`<section class="cat" id="cat${i}" data-cat="${i}"><div class="cat-head"><h3>${c.cat}</h3><span class="arrows"><button class="arr" data-rail="-1" aria-label="Anterior">‹</button><button class="arr" data-rail="1" aria-label="Próximo">›</button></span></div><div class="railwrap"><div class="rail" tabindex="0" aria-label="${c.cat}: arraste para ver mais"><div class="track"><div class="set">${c.items.map(itemHTML).join("")}</div></div></div></div></section>`).join("");
$("#tabs").innerHTML = `<button class="tab on" data-tab="all" role="tab">Tudo</button>` + MENU.map((c,i)=>`<button class="tab" data-tab="${i}" role="tab">${c.cat}</button>`).join("");

let activeTab = "all";
function filterMenu(){
  const q = $("#search").value.trim().toLowerCase();
  let any = false;
  document.querySelectorAll(".cat").forEach(sec=>{
    const showCat = activeTab==="all" || activeTab===sec.dataset.cat;
    let n = 0;
    sec.querySelectorAll(".item").forEach(it=>{ const m = !q || it.dataset.name.includes(q); it.hidden = !m; if(m) n++; });
    sec.hidden = !showCat || n===0; if(!sec.hidden) any = true;
  });
  $("#empty").hidden = any;
  document.querySelectorAll(".rail").forEach(r=>r._car && r._car.measure());
}
$("#tabs").addEventListener("click",e=>{
  const b = e.target.closest(".tab"); if(!b) return;
  activeTab = b.dataset.tab;
  document.querySelectorAll(".tab").forEach(t=>t.classList.toggle("on",t===b));
  filterMenu();
});
$("#search").addEventListener("input",filterMenu);

/* ============ SACOLA ============ */
const cart = {}; let coupon = null;
const lines = () => Object.entries(cart).map(([key,l])=>({id:key,q:l.q,n:PRODUCTS[l.id].n,p:l.unit,img:PRODUCTS[l.id].img,opts:l.opts,obs:l.obs}));
const subtotal = () => lines().reduce((s,l)=>s+l.p*l.q,0);
const FREE_FROM = 60; /* valor de exemplo para entrega grátis: troque pelo real */
const discount = () => !coupon ? 0 : Math.min(subtotal(), coupon.type==="pct" ? subtotal()*coupon.v/100 : coupon.v);

function renderCart(){
  const ls = lines(), count = ls.reduce((s,l)=>s+l.q,0);
  $("#cartCount").textContent = count;
  $("#cartBody").innerHTML = ls.length ? (()=>{ const base = subtotal()-discount(), pct = Math.min(100,base/FREE_FROM*100); return `<div class="freebar ${base>=FREE_FROM?"ok":""}"><p>${base>=FREE_FROM?"Entrega grátis liberada!":"Faltam <b>"+brl(FREE_FROM-base)+"</b> para a entrega grátis"}</p><div class="track"><i style="width:${pct}%"></i></div></div>`; })() + ls.map(l=>`<div class="line">${l.img?`<img class="th" src="${l.img}" alt="">`:""}<div style="flex:1"><b>${esc(l.n)}</b><small>${brl(l.p)} cada</small>${l.opts&&l.opts.length?`<small class="lopts">${esc(l.opts.join(", "))}</small>`:""}${l.obs?`<small class="lopts">Obs.: ${esc(l.obs)}</small>`:""}
    <div class="qty"><button data-dec="${l.id}" aria-label="Diminuir">−</button><span>${l.q}</span><button data-inc="${l.id}" aria-label="Aumentar">+</button></div></div><b>${brl(l.p*l.q)}</b></div>`).join("")
    : `<p class="none">Sua sacola está vazia. Escolha um lanche no cardápio.</p>`;
  $("#checkout").hidden = !ls.length;
  const raw = cZoneFee(), fee = effFee(), sub = subtotal(), disc = discount();
  $("#tSub").textContent = brl(sub);
  $("#rowDisc").hidden = !disc; $("#tDisc").textContent = "− "+brl(disc);
  $("#tFee").textContent = fee===null ? "Escolha a entrega" : (fee===0 ? "Grátis" : brl(fee));
  $("#tTotal").textContent = brl(sub - disc + (fee||0));
  $("#addrWrap").hidden = raw===0;
}
function cZoneFee(){ const v = $("#cZone").value; return v==="" ? null : +v; }
function effFee(){ const f = cZoneFee(); if(f===null) return null; return (f>0 && subtotal()-discount()>=FREE_FROM) ? 0 : f; }
function addItem(id,cfg){ const key = cfg ? cfg.key : id; cart[key] = cart[key] || {id,q:0,unit:cfg?cfg.unit:PRODUCTS[id].p,opts:cfg?cfg.opts:[],obs:cfg?cfg.obs:""}; cart[key].q += cfg?cfg.q:1; renderCart(); const b=$(".cart-btn"); b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }
document.addEventListener("click",e=>{
  const sz = e.target.closest("[data-size]"); if(sz){ const card = sz.closest(".item"); card.querySelectorAll(".size").forEach(b=>b.classList.toggle("on",b===sz)); card.querySelector(".pv").textContent = brl(+sz.dataset.price); card.querySelector("[data-add]").dataset.add = sz.dataset.size; return; }
  const ar = e.target.closest("[data-rail]"); if(ar){ const rl = ar.closest(".cat").querySelector(".rail"); return rl._car && rl._car.step(+ar.dataset.rail); }
  const a = e.target.closest("[data-add]"); if(a) return pick(a.dataset.add);
  const card = e.target.closest(".item"); if(card && !e.target.closest("button,.sizes")){ const bb = card.querySelector("[data-add]"); if(bb) return openSheet(bb.dataset.add); }
  const i = e.target.closest("[data-inc]"); if(i){ cart[i.dataset.inc].q++; return renderCart(); }
  const d = e.target.closest("[data-dec]"); if(d){ if(--cart[d.dataset.dec].q<=0) delete cart[d.dataset.dec]; return renderCart(); }
});
function openCart(o){ $("#drawer").classList.toggle("open",o); $("#drawer").setAttribute("aria-hidden",!o); $("#scrim").hidden=!o; document.body.style.overflow=o?"hidden":""; if(o) $("#closeCart").focus(); }
$("#openCart").onclick=()=>openCart(true); $("#closeCart").onclick=()=>openCart(false); $("#scrim").onclick=()=>openCart(false);
addEventListener("keydown",e=>{ if(e.key==="Escape") openCart(false); });
$("#cZone").addEventListener("change",renderCart);
$("#couponBtn").onclick=()=>{
  const code = $("#couponIn").value.trim().toUpperCase(), m = $("#couponMsg");
  if(COUPONS[code]){ coupon = COUPONS[code]; coupon.code = code; m.className="coupon-msg ok"; m.textContent = `Cupom ${code} aplicado: ${coupon.label}.`; }
  else{ coupon = null; m.className="coupon-msg err"; m.textContent = code ? "Cupom inválido. Confira o código e tente de novo." : "Digite o código do cupom."; }
  renderCart();
};
$("#checkout").addEventListener("submit",e=>{
  e.preventDefault();
  const raw = cZoneFee(), fee = effFee(), zoneTxt = $("#cZone").selectedOptions[0].textContent;
  if(raw!==0 && !$("#cAddr").value.trim()){ $("#cAddr").focus(); return; }
  const txt = [
    `*Novo pedido · Kero+ Burger's*`, `Cliente: ${$("#cName").value}`, ``,
    ...lines().flatMap(l=>[`${l.q}x ${l.n} — ${brl(l.p*l.q)}`, ...(l.opts&&l.opts.length?[`   + ${l.opts.join(", ")}`]:[]), ...(l.obs?[`   Obs.: ${l.obs}`]:[])]), ``,
    `Subtotal: ${brl(subtotal())}`, discount()?`Cupom ${coupon.code}: − ${brl(discount())}`:null,
    `Entrega (${zoneTxt}): ${fee===0?"grátis":brl(fee)}`,
    `*Total: ${brl(subtotal()-discount()+fee)}*`, ``,
    raw===0 ? `Retirada no balcão` : `Endereço: ${$("#cAddr").value}`, `Pagamento: ${$("#cPay").value}`
  ].filter(x=>x!==null).join("\n");
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(txt)}`,"_blank","noopener");
});

/* ============ CALCULAR ENTREGA ============ */
$("#zone").addEventListener("change",e=>{
  const r = $("#zoneResult"), v = e.target.value;
  if(!v){ r.textContent = "Escolha sua região para ver a taxa e o tempo."; return; }
  const [fee,time] = v.split("|");
  r.innerHTML = `Taxa: <strong>${+fee===0?"Grátis":brl(+fee)}</strong><br>Tempo estimado: ${time} min`;
});

/* ============ HERO: O HAMBÚRGUER CAI E MONTA CONFORME A ROLAGEM ============ */
/* 115 quadros com fundo transparente (WebP). A rolagem escolhe o quadro; o movimento é suavizado
   e dois quadros vizinhos são misturados, então nada pula nem fica translúcido quando para. */
const hero = $(".hero"), steps = [...document.querySelectorAll("#steps li")], glow = document.querySelector(".glow");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const clamp = (v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const sm = t=>t*t*(3-2*t);
const heroCopy = document.querySelector(".hero-copy"), pin = document.querySelector(".hero-pin");
const cv = $("#burgerCv"), cx = cv.getContext("2d");
const PRE = 12+17, N = 115+PRE, FPS = 24, ANIM_END = .88;  /* PRE = quadros de entrada (pão caindo + alface vindo de cima); a animação termina em 88% da rolagem, o resto é pausa */
const DIR = "assets/" + (matchMedia("(max-width:900px)").matches ? "burger-frames-s" : "burger-frames") + "/";
const STEP_AT = [14,...[1.1,1.6,3.0,3.8,4.4].map(s=>s*FPS+PRE)]; /* quadro em que cada ingrediente assenta */
const DONE_AT = N-4;
const frames = new Array(N);
let pos = 0, target = 0, raf = 0, last = 0, W = 0, H = 0, heroDone = false;

function setDone(on){
  if(on===heroDone) return; heroDone = on;
  $("#final").classList.toggle("show",on); heroCopy.classList.toggle("done",on);
  $("#h1").innerHTML = on ? `Se a fome bateu,<br>o Kero+ resolveu` : `Burger que<br>você quer<span class="plus">+</span>`;
  $("#lede").textContent = on ? "Burger artesanal, batata crocante e entrega em Barra do Choça. É só escolher e pedir pelo WhatsApp." : "";
}
function frameAt(i){
  i = clamp(i,0,N-1);
  for(let j=i;j>=0;j--) if(frames[j]) return frames[j];
  for(let j=i;j<N;j++) if(frames[j]) return frames[j];
  return null;
}
function put(im,a){
  if(!im||a<=0) return;
  const s = Math.min(W/im.naturalWidth, H/im.naturalHeight), w = im.naturalWidth*s, h = im.naturalHeight*s;
  const e = 3, nw = im.naturalWidth, nh = im.naturalHeight;   /* corta a borda do quadro (some a linha retangular) */
  cx.globalAlpha = a; cx.drawImage(im,e,e,nw-2*e,nh-2*e,(W-w)/2+e*s,(H-h)/2+e*s,w-2*e*s,h-2*e*s);
}
function draw(){
  if(!W) return;
  cx.globalCompositeOperation = "source-over"; cx.globalAlpha = 1; cx.clearRect(0,0,W,H);
  const i = Math.floor(pos), f = pos-i;
  if(f<.004 || i>=N-1){ put(frameAt(Math.round(pos)),1); return; }
  cx.globalCompositeOperation = "lighter";            /* mistura correta de quadros com transparência */
  put(frameAt(i),1-f); put(frameAt(i+1),f);
  cx.globalCompositeOperation = "source-over"; cx.globalAlpha = 1;
}
function ui(){
  steps.forEach((li,i)=>li.classList.toggle("on",pos>=STEP_AT[i]));
  setDone(pos>=DONE_AT);
  glow.style.opacity = (.3 + .7*sm(clamp(pos/DONE_AT))).toFixed(3);
}
function tick(now){
  const dt = Math.min(.05,(now-last)/1000||.016); last = now;
  pos += (target-pos)*(1-Math.exp(-dt*7));            /* amortecimento: desliza em vez de pular */
  if(Math.abs(target-pos)<.015) pos = target;
  draw(); ui();
  raf = pos!==target ? requestAnimationFrame(tick) : 0;
}
function kick(){ if(!raf){ last = performance.now(); raf = requestAnimationFrame(tick); } }
const topBar = document.getElementById("top");
function headerSlide(){            /* o menu de cima fica fixo durante a animação e só sobe junto com a página depois dela */
  const end = hero.offsetTop+hero.offsetHeight-innerHeight;
  topBar.style.transform = "translateY("+(-Math.max(0,scrollY-end))+"px)";
}
function onScroll(){
  headerSlide();
  const total = Math.max(1,hero.offsetHeight-pin.offsetHeight);
  target = clamp(-hero.getBoundingClientRect().top/total/ANIM_END)*(N-1);
  kick();
}
function resize(){
  const r = cv.getBoundingClientRect(), d = Math.min(devicePixelRatio||1,2);
  W = Math.round(r.width*d); H = Math.round(r.height*d); cv.width = W; cv.height = H;
  cx.imageSmoothingQuality = "high"; draw();
}
function loadFrame(i){
  return new Promise(res=>{
    const im = new Image(); im.decoding = "async";
    im.onload = ()=>{ frames[i] = im; if(i===0) cv.classList.add("ready"); draw(); res(); };
    im.onerror = ()=>res();
    im.src = DIR+"f"+String(i+1).padStart(3,"0")+".webp";
  });
}
function loadAll(){
  const order = [0,...Array.from({length:N-1},(_,k)=>k+1)];
  let next = 0; const worker = async()=>{ while(next<order.length) await loadFrame(order[next++]); };
  for(let k=0;k<6;k++) worker();
}
addEventListener("resize",resize); addEventListener("resize",headerSlide); headerSlide();
addEventListener("scroll",onScroll,{passive:true});
resize(); loadAll();
if(reduce){ pos = target = N-1; cv.classList.add("ready"); steps.forEach(li=>li.classList.add("on")); setDone(true); glow.style.opacity = 1; draw(); }
else{ glow.style.opacity = .3; onScroll(); }
const vid = document.querySelector(".bgvideo");
/* o vídeo só começa a baixar depois que a página terminou de carregar (senão o navegador fica "carregando" no celular) */
if(!reduce){ let vgo = false; const go = ()=>{ if(vgo) return; vgo = true; vid.src = vid.dataset.src; vid.play().catch(()=>{}); };
  if(document.readyState==="complete") setTimeout(go,300); else addEventListener("load",()=>setTimeout(go,300)); setTimeout(go,4000); }

renderStatus(); renderHours(); renderCart(); filterMenu();
setInterval(renderStatus,60000);





/* ============ FAVORITO DA GALERA ============ */
(function(){
  const NAME = "Duplo Cheddar Bacon";
  const ings = ["Pão","2 blends de 120g","Queijo cheddar","Fatias de bacon","Maionese de bacon","Salada"];
  $("#favChips").innerHTML = ings.map((t,i)=>`<li style="--i:${i}">${t}</li>`).join("");
  const id = Object.keys(PRODUCTS).find(k=>PRODUCTS[k].n===NAME);
  $("#favAdd").addEventListener("click",()=>pick(id));
  const photo = $("#favPhoto"), copy = $(".fav-copy"), num = $("#favNum"), to = +num.dataset.to;
  const reduceM = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const io = new IntersectionObserver(([en])=>{
    if(!en.isIntersecting) return; io.disconnect();
    photo.classList.add("in"); copy.classList.add("in"); setTimeout(()=>photo.classList.add("live"),1500);
    if(reduceM) return;
    const t0 = performance.now();
    (function tick(now){ const p = Math.min(1,(now-t0-900)/1200); if(p<0){ num.textContent=0; return requestAnimationFrame(tick);} num.textContent = Math.round(to*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(tick); })(t0);
  },{threshold:.3});
  num.textContent = reduceM ? to : 0;
  io.observe($(".fav-grid"));
  /* inclinação 3D da foto com o mouse */
  const img = photo.querySelector("img");
  photo.addEventListener("pointermove",e=>{ const r = photo.getBoundingClientRect(), x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5; if(photo.classList.contains("live")) img.style.transform = `rotateY(${x*14}deg) rotateX(${-y*14}deg) scale(1.03)`; });
  photo.addEventListener("pointerleave",()=>{ img.style.transform = ""; });
})();









/* sem combos com foto: some a seção e o link do menu */
if(!COMBOS.length){ document.querySelector("#destaques")?.remove(); document.querySelectorAll('a[href="#destaques"]').forEach(a=>a.remove()); }





var fxc = null;

/* ============ CURSOR LARANJA + BOTÕES MAGNÉTICOS ============ */
(function(){
  if(!matchMedia("(pointer:fine)").matches || reduce) return;
  document.documentElement.classList.add("cur");
  const dot = document.createElement("div"), ring = document.createElement("div");
  dot.className = "cur-dot"; ring.className = "cur-ring"; document.body.append(ring,dot);
  let x = -100, y = -100, rx = -100, ry = -100, shown = false;
  addEventListener("pointermove",e=>{ x = e.clientX; y = e.clientY; if(!shown){ shown = true; rx = x; ry = y; dot.style.opacity = ring.style.opacity = 1; }
    const hot = e.target.closest("a,button,.item,.tab,select,input,[role=button]");
    ring.classList.toggle("hot",!!hot); dot.classList.toggle("hot",!!hot); magnet(e); },{passive:true});
  document.addEventListener("pointerleave",()=>{ dot.style.opacity = ring.style.opacity = 0; shown = false; if(cur){ cur.style.translate = ""; cur = null; } });
  addEventListener("pointerdown",()=>ring.classList.add("down")); addEventListener("pointerup",()=>ring.classList.remove("down"));
  (function loop(){ rx += (x-rx)*.18; ry += (y-ry)*.18; dot.style.transform = `translate3d(${x}px,${y}px,0)`; ring.style.transform = `translate3d(${rx}px,${ry}px,0)`; requestAnimationFrame(loop); })();
  const MAG = ".btn,.add:not(:disabled),.cart-btn,.tab,.arr,.x";
  var cur = null;
  function magnet(e){
    const el = e.target.closest(MAG);
    if(cur && cur!==el){ cur.style.translate = ""; cur = null; }
    if(!el) return; cur = el;
    const r = el.getBoundingClientRect();
    el.style.translate = `${(e.clientX-(r.left+r.width/2))*.28}px ${(e.clientY-(r.top+r.height/2))*.4}px`;
  }
})();

/* ============ FAVORITO: GIRA COM O SCROLL ============ */
(function(){
  if(reduce) return;
  const fav = $("#favorito"), ph = $("#favPhoto");
  function upd(){
    const r = fav.getBoundingClientRect(), p = clamp((innerHeight-r.top)/(innerHeight+r.height));
    ph.style.setProperty("--r",((p-.5)*80)+"deg"); ph.style.setProperty("--ty",((.5-p)*70)+"px");
  }
  addEventListener("scroll",upd,{passive:true}); addEventListener("resize",upd); upd();
})();

/* ============ BRASA: A LINHA DESENHA QUANDO ENTRA NA TELA ============ */
(function(){
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }),{threshold:.6});
  document.querySelectorAll(".ember").forEach(el=>io.observe(el));
})();

/* ============ CARROSSEL INFINITO E SUAVE ============
   Cada categoria é um trilho que se repete (o último item é seguido do primeiro).
   Arrastar (mouse ou dedo), roda do mouse/trackpad na horizontal, setas e teclado
   movem um alvo; a posição acompanha o alvo com amortecimento, e soltar dá inércia. */
function Carousel(rail){
  const track = rail.querySelector(".track"), set = track.querySelector(".set"), cat = rail.closest(".cat");
  /* celular/tablet: rolagem nativa do dedo (mais confiável no iPhone), sem trilho infinito */
  if(matchMedia("(pointer:coarse)").matches || innerWidth<=900){
    rail.classList.add("native"); cat.classList.add("noloop");
    rail._car = { measure(){}, step(d){ rail.scrollBy({left:d*rail.clientWidth*.7,behavior:"smooth"}); } };
    /* mouse também arrasta (o dedo já rola sozinho) */
    let down = false, sx0 = 0, sl0 = 0, mv = 0;
    rail.addEventListener("pointerdown",e=>{ if(e.pointerType!=="mouse"||e.button!==0) return; down = true; mv = 0; sx0 = e.clientX; sl0 = rail.scrollLeft; rail.style.scrollSnapType = "none"; rail.style.cursor = "grabbing"; });
    addEventListener("pointermove",e=>{ if(!down) return; const dx = e.clientX-sx0; mv = Math.max(mv,Math.abs(dx)); rail.scrollLeft = sl0-dx; });
    const end = ()=>{ if(!down) return; down = false; rail.style.scrollSnapType = ""; rail.style.cursor = ""; };
    addEventListener("pointerup",end); addEventListener("pointercancel",end);
    rail.addEventListener("click",e=>{ if(mv>6){ e.preventDefault(); e.stopPropagation(); mv = 0; } },true);
    rail.style.cursor = "grab";
    return;
  }
  const before = set.cloneNode(true), after = set.cloneNode(true);
  [before,after].forEach(s=>{ s.setAttribute("aria-hidden","true"); s.querySelectorAll("button,a").forEach(b=>b.tabIndex = -1); });
  track.prepend(before); track.append(after);
  let W = 0, pad = 0, loop = true, pos = 0, target = 0, vel = 0, dragging = false, raf = 0, last = 0, sx = 0, st = 0, moved = 0, lx = 0, lt = 0;
  const lim = (v,a,b)=>Math.min(b,Math.max(a,v));
  function wrap(){ if(!loop) return; while(pos<0){ pos += W; target += W; st += W; } while(pos>=W){ pos -= W; target -= W; st -= W; } }
  function render(){ wrap(); track.style.transform = "translate3d("+(pad-(loop?W:0)-pos)+"px,0,0)"; }
  function measure(){
    pad = Math.max(56, innerWidth/2-560);   // sempre deixa um pedaço do card anterior à mostra, para indicar que dá para rolar
    W = set.offsetWidth;
    loop = W > rail.clientWidth - pad + 40;      // só repete se não couber tudo na tela
    before.style.display = after.style.display = loop ? "" : "none";
    cat.classList.toggle("noloop",!loop);
    if(!loop){ pos = target = vel = 0; }
    render();
  }
  function tick(now){
    const dt = Math.min(.05,(now-last)/1000); last = now;
    if(!dragging){
      if(Math.abs(vel)>8){ target += vel*dt; vel *= Math.exp(-dt*3.2); } else vel = 0;
      pos += (target-pos)*(1-Math.exp(-dt*12));
    }
    render();
    if(dragging || Math.abs(vel)>8 || Math.abs(target-pos)>.3) raf = requestAnimationFrame(tick);
    else { pos = target; render(); raf = 0; }
  }
  function kick(){ if(!raf){ last = performance.now(); raf = requestAnimationFrame(tick); } }
  function step(dir){ if(!loop) return; vel = 0; target += dir*rail.clientWidth*.7; kick(); }
  rail.addEventListener("pointerdown",e=>{
    if(!loop || (e.pointerType==="mouse" && e.button!==0)) return;
    dragging = true; moved = 0; sx = lx = e.clientX; st = target; lt = performance.now(); vel = 0; rail.classList.add("drag"); kick();
  });
  addEventListener("pointermove",e=>{
    if(!dragging) return;
    const dx = e.clientX-sx; moved = Math.max(moved,Math.abs(dx));
    target = st-dx; pos = target;
    const now = performance.now(), inst = (lx-e.clientX)/Math.max(1,now-lt)*1000;
    vel = vel*.6+inst*.4; lx = e.clientX; lt = now;
  },{passive:true});
  const up = ()=>{ if(!dragging) return; dragging = false; rail.classList.remove("drag"); if(performance.now()-lt>90) vel = 0; vel = lim(vel,-3200,3200); kick(); };
  addEventListener("pointerup",up); addEventListener("pointercancel",up);
  rail.addEventListener("click",e=>{ if(moved>6){ e.preventDefault(); e.stopPropagation(); moved = 0; } },true);
  rail.addEventListener("wheel",e=>{
    if(!loop) return;
    const ax = Math.abs(e.deltaX), ay = Math.abs(e.deltaY);
    if(ax>ay || (e.shiftKey && ay>0)){ e.preventDefault(); target += (ax>ay ? e.deltaX : e.deltaY); vel = 0; kick(); }
  },{passive:false});
  rail.addEventListener("keydown",e=>{ if(e.key==="ArrowRight"){ e.preventDefault(); step(1); } else if(e.key==="ArrowLeft"){ e.preventDefault(); step(-1); } });
  rail._car = { measure, step };
  measure();
}
document.querySelectorAll(".rail").forEach(Carousel);
addEventListener("resize",()=>document.querySelectorAll(".rail").forEach(r=>r._car.measure()));
addEventListener("load",()=>document.querySelectorAll(".rail").forEach(r=>r._car.measure()));
/* celular: o tamanho da tela pode mudar depois do início (barra do Safari, fontes); remede sempre que o trilho mudar */
if("ResizeObserver" in window){ const ro = new ResizeObserver(()=>document.querySelectorAll(".rail").forEach(r=>r._car.measure())); document.querySelectorAll(".rail").forEach(r=>ro.observe(r)); }
[300,1200,3000].forEach(t=>setTimeout(()=>document.querySelectorAll(".rail").forEach(r=>r._car.measure()),t));
if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>document.querySelectorAll(".rail").forEach(r=>r._car.measure()));

/* ============ PROMOÇÃO (vem do painel admin) ============ */
(function(){
  let current = null, chip = null;
  function ensureChip(){
    if(chip) return chip;
    chip = document.createElement("button"); chip.type = "button"; chip.className = "promo-chip";
    document.querySelector(".login-btn").before(chip); chip.onclick = ()=>openPop(false); return chip;
  }
  function apply(p){
    COUPONS[p.code] = {type:p.type==="off"?"off":"pct", v:+p.value, label:KeroPromo.fmt(p)+" de desconto"};
    coupon = COUPONS[p.code]; coupon.code = p.code; $("#couponIn").value = p.code;
    const m = $("#couponMsg"); m.className = "coupon-msg ok"; m.textContent = "Cupom "+p.code+" aplicado: "+coupon.label+".";
    renderCart();
  }
  function remove(){ if(coupon && current && coupon.code===current.code){ coupon = null; $("#couponIn").value = ""; $("#couponMsg").textContent = ""; renderCart(); } }
  function openPop(auto){
    if(!current) return;
    const key = "keroPromo"+current.updatedAt;
    KeroPromo.show(current,{ onClose:()=>{ if(auto) sessionStorage.setItem(key,"1"); }, onUse:()=>{ sessionStorage.setItem(key,"1"); document.querySelector("#cardapio").scrollIntoView({behavior:"smooth"}); } });
  }
  async function check(first){
    let p; try{ p = (await KeroPromo.load()).p; }catch(e){ return; }
    const live = p.active && !(p.endsAt && Date.parse(p.endsAt)<Date.now());
    if(!live){ if(current){ remove(); KeroPromo.close(true); ensureChip().classList.remove("show"); current = null; } return; }
    const isNew = !current || current.updatedAt!==p.updatedAt;
    current = p;
    if(!isNew) return;
    apply(p);
    const c = ensureChip(); c.textContent = KeroPromo.fmt(p)+" OFF"; c.classList.add("show");
    if(!sessionStorage.getItem("keroPromo"+p.updatedAt)) setTimeout(()=>{ if(current && current.updatedAt===p.updatedAt) openPop(true); }, first?1400:300);
  }
  check(true); setInterval(check,15000);
})();



/* ============ TELA DE ESCOLHA DO PRODUTO (molhos, adicionais, tamanho, observação) ============ */
let SH = null;
function pick(id){ const p = PRODUCTS[id]; if(p && p.groups && p.groups.length) openSheet(id); else addItem(id); }

function groupHTML(g,gi){
  const rule = g.max===1 ? "Escolha 1 opção" : "Escolha até "+g.max+" opções";
  return `<section class="og" data-g="${gi}"><header><div><b>${esc(g.title)}</b><small>${rule}</small></div><div class="og-r">${g.req?'<em class="req">Obrigatório</em>':""}<span class="og-c" data-c>0/${g.max}</span></div></header>`
  + g.options.map((o,oi)=>{
    const out = o[3] && o[3].out;
    const ctl = out ? `<span class="op-out">EM FALTA</span>`
      : g.max===1 ? `<button type="button" class="op-radio" role="radio" aria-checked="false" aria-label="${esc(o[0])}"></button>`
      : `<div class="op-step"><button type="button" class="m" data-d="-1" aria-label="Tirar ${esc(o[0])}">−</button><b>0</b><button type="button" class="p" data-d="1" aria-label="Pôr ${esc(o[0])}">+</button></div>`;
    return `<div class="op ${out?"out":""}" data-o="${oi}"><div class="op-t"><b>${esc(o[0])}</b>${o[1]?`<small>${esc(o[1])}</small>`:""}<span class="op-p">${g.abs?brl(o[2]):"+ "+brl(o[2])}</span></div>${ctl}</div>`;
  }).join("") + `</section>`;
}

function openSheet(id){
  const P = PRODUCTS[id]; if(!P) return;
  closeSheet(true);
  const groups = P.groups || [], abs = groups.some(g=>g.abs);
  const from = abs ? Math.min(...groups.find(g=>g.abs).options.map(o=>o[2])) : 0;
  SH = {id, P, groups, q:1, sel:groups.map(g=>g.options.map(()=>0)), prev:document.activeElement};
  const w = document.createElement("div");
  w.className = "sheet-scrim"; w.setAttribute("role","dialog"); w.setAttribute("aria-modal","true"); w.setAttribute("aria-labelledby","shT");
  w.innerHTML = `<div class="sheet">
    <button class="sheet-x" type="button" aria-label="Fechar">&times;</button>
    <div class="sheet-photo">${P.img?`<img src="${P.img}" alt="">`:`<div class="nophoto"><span>SEM FOTO</span></div>`}</div>
    <div class="sheet-main">
      <div class="sheet-scroll">
        <h3 id="shT">${esc(P.n)}</h3>
        ${P.d?`<p class="sh-d">${esc(P.d)}</p>`:""}
        <p class="sh-price">${abs?"A partir de "+brl(from):brl(P.p)}</p>
        ${groups.map(groupHTML).join("")}
        <label class="sh-obs">Alguma observação?<textarea maxlength="140" rows="2" placeholder="Ex.: sem cebola"></textarea><small><span id="obsN">0</span> / 140</small></label>
      </div>
      <div class="sheet-foot">
        <div class="sh-qty"><button type="button" data-q="-1" aria-label="Diminuir">−</button><span id="shQ">1</span><button type="button" data-q="1" aria-label="Aumentar">+</button></div>
        <button type="button" class="btn sh-add" id="shAdd"></button>
      </div>
    </div></div>`;
  document.body.appendChild(w); document.body.style.overflow = "hidden"; SH.el = w;
  requestAnimationFrame(()=>w.classList.add("in"));
  shUpdate();
  w.addEventListener("click",shClick);
  w.addEventListener("input",e=>{ if(e.target.tagName==="TEXTAREA") w.querySelector("#obsN").textContent = e.target.value.length; });
  w.addEventListener("keydown",e=>{
    if(e.key==="Escape") closeSheet();
    if(e.key==="Tab"){ const f = [...w.querySelectorAll("button:not([disabled]),textarea")].filter(x=>x.offsetParent); const i = f.indexOf(document.activeElement);
      if(e.shiftKey && i<=0){ e.preventDefault(); f[f.length-1].focus(); } else if(!e.shiftKey && i===f.length-1){ e.preventDefault(); f[0].focus(); } }
  });
  setTimeout(()=>w.querySelector(".sheet-x").focus(),50);
}
function closeSheet(silent){
  if(!SH) return; const s = SH; SH = null;
  s.el.classList.remove("in"); document.body.style.overflow = "";
  setTimeout(()=>s.el.remove(),250);
  if(!silent && s.prev && s.prev.focus) s.prev.focus();
}
const shTotal = gi => SH.sel[gi].reduce((a,b)=>a+b,0);
function shUnit(){ let sum = 0; SH.groups.forEach((g,gi)=>g.options.forEach((o,oi)=>sum += o[2]*SH.sel[gi][oi])); return (SH.groups.some(g=>g.abs)?0:SH.P.p)+sum; }
const shValid = () => SH.groups.every((g,gi)=>!g.req || shTotal(gi)>=1);
function shUpdate(){
  const w = SH.el;
  SH.groups.forEach((g,gi)=>{
    const sec = w.querySelector(`.og[data-g="${gi}"]`), t = shTotal(gi);
    sec.querySelector("[data-c]").textContent = t+"/"+g.max;
    sec.classList.toggle("done",t>0);
    g.options.forEach((o,oi)=>{
      const row = sec.querySelector(`.op[data-o="${oi}"]`), n = SH.sel[gi][oi];
      row.classList.toggle("on",n>0);
      const rd = row.querySelector(".op-radio"); if(rd) rd.setAttribute("aria-checked",n>0);
      const st = row.querySelector(".op-step"); if(st){ st.querySelector("b").textContent = n; st.classList.toggle("has",n>0); st.querySelector(".p").disabled = t>=g.max; }
    });
  });
  w.querySelector("#shQ").textContent = SH.q;
  const total = shUnit()*SH.q, btn = w.querySelector("#shAdd");
  btn.textContent = shValid() ? "Adicionar  "+brl(total) : "Escolha as opções obrigatórias";
  btn.classList.toggle("wait",!shValid());
}
function shClick(e){
  if(e.target===SH.el || e.target.closest(".sheet-x")) return closeSheet();
  const qb = e.target.closest("[data-q]");
  if(qb){ SH.q = Math.min(99,Math.max(1,SH.q+ +qb.dataset.q)); return shUpdate(); }
  const row = e.target.closest(".op"), sec = e.target.closest(".og");
  if(row && sec && !row.classList.contains("out")){
    const gi = +sec.dataset.g, oi = +row.dataset.o, g = SH.groups[gi], cur = SH.sel[gi][oi];
    const step = e.target.closest("[data-d]");
    if(g.max===1){ SH.sel[gi] = SH.sel[gi].map(()=>0); if(!cur) SH.sel[gi][oi] = 1; }
    else{
      const d = step ? +step.dataset.d : 1;
      if(d>0 && shTotal(gi)>=g.max) return;
      if(cur+d<0) return;
      SH.sel[gi][oi] = cur+d;
    }
    return shUpdate();
  }
  if(e.target.closest("#shAdd")){
    if(!shValid()){ const bad = SH.groups.findIndex((g,gi)=>g.req && shTotal(gi)<1), sec2 = SH.el.querySelector(`.og[data-g="${bad}"]`);
      sec2.scrollIntoView({behavior:"smooth",block:"center"}); sec2.classList.remove("shake"); void sec2.offsetWidth; sec2.classList.add("shake"); return; }
    const opts = []; SH.groups.forEach((g,gi)=>g.options.forEach((o,oi)=>{ const n = SH.sel[gi][oi]; if(n>0) opts.push(o[0]+(n>1?" ×"+n:"")); }));
    const obs = SH.el.querySelector("textarea").value.trim();
    const key = SH.id+"|"+SH.sel.map(a=>a.join(",")).join(";")+"|"+obs;
    addItem(SH.id,{key,unit:shUnit(),q:SH.q,opts,obs});
    closeSheet(true);
  }
}



/* ============ BOTÃO ENTRAR (a conta do cliente ainda não existe: por enquanto mostra um aviso) ============ */
(function(){
  let box = null, prev = null;
  function close(){ if(!box) return; const b = box; box = null; b.classList.remove("in"); document.body.style.overflow = ""; setTimeout(()=>b.remove(),250); prev && prev.focus && prev.focus(); }
  function open(){
    if(box) return; prev = document.activeElement;
    box = document.createElement("div"); box.className = "sheet-scrim mini-scrim"; box.setAttribute("role","dialog"); box.setAttribute("aria-modal","true"); box.setAttribute("aria-labelledby","lgT");
    box.innerHTML = `<div class="mini"><button class="sheet-x" type="button" aria-label="Fechar">&times;</button>
      <div class="mini-ic" aria-hidden="true"><svg viewBox="0 0 24 24" width="34" height="34" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg></div>
      <h3 id="lgT">Sua conta Kero+</h3>
      <p>Em breve você poderá criar sua conta para ver quantos lanches já pediu e resgatar ofertas.</p>
      <button class="btn full" type="button">Entendi</button></div>`;
    document.body.appendChild(box); document.body.style.overflow = "hidden";
    requestAnimationFrame(()=>box.classList.add("in"));
    box.addEventListener("click",e=>{ if(e.target===box || e.target.closest(".sheet-x") || e.target.closest(".btn")) close(); });
    box.addEventListener("keydown",e=>{ if(e.key==="Escape") close(); if(e.key==="Tab"){ const f=[...box.querySelectorAll("button")]; const i=f.indexOf(document.activeElement); if(e.shiftKey&&i<=0){e.preventDefault();f[f.length-1].focus();} else if(!e.shiftKey&&i===f.length-1){e.preventDefault();f[0].focus();} } });
    setTimeout(()=>box.querySelector(".btn").focus(),60);
  }
  document.querySelector("#openLogin").addEventListener("click",open);
})();

/* ============ MODO LEVE (aparelhos fracos) ============ */
var fpsN = 0, fpsT0 = 0, fpsChecks = 0, lite = false;
function goLite(){
  if(lite) return; lite = true; document.documentElement.classList.add("lite");
  if(fxc){ fxc.remove(); fxc = null; }
}
function monitorFps(now){
  if(lite || fpsChecks>=3 || reduce || now<5000) return;
  if(!fpsT0){ fpsT0 = now; fpsN = 0; return; }
  fpsN++;
  const span = now-fpsT0;
  if(span>1500){
    if(!document.hidden && span<4000 && fpsN/(span/1000) < 28) goLite();
    fpsChecks++; fpsT0 = now; fpsN = 0;
  }
}
if(navigator.hardwareConcurrency && navigator.hardwareConcurrency<=2) goLite();
