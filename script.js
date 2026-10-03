/* ===== EDITABLE CONTENT ===== */
// ALL site images live here (plus products[].image and reviews[].img below). Replace the file or change the path.
const IMAGES = {
 logo:"images/logo.png",
 heroPoster:"bg.jpgg",
 heroVideo:"labels.mp4",
 about:"why.jpeg",
 banner1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2FnpIBWBdzzXH8t_970CA6EbI5vySolz589YuZ0PPlUdpYrQrIO0gOKyY&s=10",
 banner2:"brand.jfif",
 banner3:"images/banners/banner-3.jpg"
};
// Prices: price = Rupees, per = how many pieces that price covers (100 = per 100 pcs, 1 = per piece)
const WA_NUMBER = "923193891973";
const products = [
 {name:"Leather Patches", image:"leather.jpeg", minQuantity:100, price:15000, per:1000, description:"Custom leather patches for clothing, jackets, jeans, bags and fashion brands.", options:["Embossed or debossed logo","Leather type and colour","Size and shape","Stitching or adhesive back"]},
 {name:"Woven Labels", image:"woven.jpeg", minQuantity:50, price:1300, per:50, description:"Premium woven labels for clothing, apparel, garments and fashion brands.", options:["Damask or satin weave","Size and fold style","Thread colours","Loop, end-fold or flat cut"]},
 {name:"Sewing Metal Labels", image:"metal.jpeg", minQuantity:50, price:12500, per:50, description:"Luxury metal sewing labels for clothing, bags, shoes and accessories.", options:["Gold, silver or custom finish","Engraved or embossed logo","Size and shape","Sew-on fitting"]},
 {name:"Thank You Cards", image:"thankyou.jpeg", minQuantity:1000, price:7500, per:1000, description:"Custom branded thank-you cards for e-commerce, clothing brands and packaging.", options:["Card size and paper","Full-colour or foil printing","Single or double sided","Your message and logo"]},
 {name:"Canvas Labels", image:"canvas.jpeg", minQuantity:100, price:3500, per:100, description:"Custom canvas labels for clothing, bags, handmade products and fashion brands.", options:["Canvas colour","Printed or stitched design","Size and shape","Edge finishing"]},
 {name:"Round Stickers", image:"stickeround.jpeg", minQuantity:100, price:2400, per:100, description:"Custom round stickers for packaging, product branding, sealing and promotion.", options:["Diameter","Matte or glossy finish","Paper or vinyl","Roll or sheet"]},
 {name:"Keychains", image:"chain.jpeg", minQuantity:100, price:80, per:1, description:"Custom branded keychains for fashion brands, promotions, corporate branding and packaging.", options:["Metal, leather or rubber","Logo style","Size and shape","Colour options"]},
 {name:"Rubber Patch", image:"https://i.pinimg.com/1200x/cb/dd/d3/cbddd31e5e9edab080a918300da19b88.jpg", minQuantity:1000, price:30000, per:1000, description:"Premium-quality, durable and flexible rubber patches designed to give your products a modern, professional look. Perfect for custom branding, logos, and apparel.", options:["Metal, leather or rubber","Logo style","Size and shape","Colour options"]}
];
const reviews = [ /* Placeholders — replace with real customer reviews */
 {name:"Ali", brand:"karachi pants", stars:5, text:"Replace this text with a real review from your customer.", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP66xZe_6NzZqJBWm79x8S2MHyt4QklAK-9-jQ-IRAFw&s=10"},
 {name:"Zain", brand:"clothes", stars:5, text:"“Excellent quality and beautiful finishing. The labels made our packaging look much more professional. Will order again!", img:"zain.jpg"},
 {name:"Haseeb", brand:"my clothes", stars:5, text:"The final product looks even better than expected. Great quality!", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0QZR5M92RO_ZPmmSkV821dxFaF6ZjCVgvdq18SWkf6oXQacgNvNtx749&s=10"},
 {name:"Manan", brand:"manan fabirics", stars:5, text:"Professional service, great quality and attention to detail. Recommended!", img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMxCm5IPoXLGbMKd2bz-SN4Z9u57138eV95SgxY5et_2IGfVK24laIqeZx&s=10"}
];
const faqs = [
 ["What is the minimum order quantity?","Minimum order starts from 100 pieces."],
 ["Can I customize the products?","Yes, products can be customized according to the available specifications."],
 ["Can I send my own logo?","Yes, customers can provide their artwork/logo for customization."],
 ["How can I place an order?","Customers can contact Ali Hassan Labels through WhatsApp or the contact section."],
 ["How do I get a quotation?","Contact the business through WhatsApp with the product, quantity and customization requirements."],
 ["Do you provide different types of labels?","Yes, the website offers multiple label and branding products including woven, leather, metal and canvas labels."]
];
const words = ["Woven Labels","Leather Patches","Metal Labels","Canvas Labels","Stickers","Thank You Cards","Keychains"];

/* ===== HELPERS ===== */
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const waURL = t => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(t)}`;
$$('[data-wa]').forEach(a => a.href = waURL(a.dataset.wa));
const fmt = n => 'Rs ' + Math.round(n).toLocaleString('en-PK');
const priceLabel = p => p.per===1 ? `${fmt(p.price)} / piece` : `${fmt(p.price)} / ${p.per} pcs`;
const total = (p,q) => p.price*q/p.per;
$$('[data-img]').forEach(el=>{el.src=IMAGES[el.dataset.img]});
const hv=$('#home video'); hv.poster=IMAGES.heroPoster; hv.querySelector('source').src=IMAGES.heroVideo; hv.load();
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ===== RENDER ===== */
$('#mq').innerHTML = Array(8).fill('<span>CUSTOM LABELS</span><i class="fa-solid fa-diamond"></i><span>PREMIUM PACKAGING</span><i class="fa-solid fa-diamond"></i><span>BRANDING SOLUTIONS</span><i class="fa-solid fa-diamond"></i><span>MADE FOR YOUR BRAND</span><i class="fa-solid fa-diamond"></i>').join('');
$('#grid').innerHTML = products.map((p,i) => `
 <article class="card"><div class="ph"><span class="num">0${i+1}</span><img src="${p.image}" alt="Custom ${esc(p.name)}" loading="lazy" onerror="this.hidden=true"></div>
 <div class="body"><h3>${esc(p.name)}</h3><p>${esc(p.description)}</p><div class="price">${priceLabel(p)}</div><div class="moq">Starting From: ${p.minQuantity} Pieces</div>
 <div class="row"><button class="btn" data-i="${i}">VIEW DETAILS</button><a class="btn fill" target="_blank" rel="noopener" href="${waURL(`Hello Ali Hassan Labels, I want to order Custom ${p.name}. Quantity: ${p.minQuantity} pieces. Price: ${fmt(total(p,p.minQuantity))}.`)}">ORDER NOW</a></div></div></article>`).join('');
$('#cpr').innerHTML = products.map(p => `<option value="${esc(p.name)}">${esc(p.name)} — ${priceLabel(p)}</option>`).join('');
$('#fprod').innerHTML = products.map(p => `<li><a href="#products">${esc(p.name)}</a></li>`).join('');
$('#faqList').innerHTML = faqs.map((f,i) => `<div class="q"><h3><button aria-expanded="false" aria-controls="a${i}" id="b${i}">${esc(f[0])}<i class="fa-solid fa-plus"></i></button></h3><div class="ans" id="a${i}" role="region" aria-labelledby="b${i}"><p>${esc(f[1])}</p></div></div>`).join('');
$('#track').innerHTML = reviews.map(r => `<div class="rev"><div class="stars" aria-label="${r.stars} out of 5 stars">${'<i class="fa-solid fa-star"></i>'.repeat(r.stars)}</div><p>${esc(r.text)}</p><div class="who"><div class="av">${r.img?`<img src="${r.img}" alt="${esc(r.name)}" loading="lazy" onerror="this.hidden=true">`:''}</div><div><b>${esc(r.name)}</b><small>${esc(r.brand)}</small></div></div></div>`).join('');
let d=''; for(let y=40;y<360;y+=16)for(let x=60;x<760;x+=16){const nx=x/800,ny=y/400;if((Math.sin(nx*9)+Math.cos(ny*7)+Math.sin((nx+ny)*5))>0.3)d+=`<circle cx="${x}" cy="${y}" r="2"/>`}
$('#dots').innerHTML = d;

/* ===== NAV / MENU ===== */
const nav=$('#nav'), menu=$('#menu'), burger=$('#burger');
const setMenu = o => {menu.classList.toggle('open',o);burger.setAttribute('aria-expanded',o);burger.innerHTML=`<i class="fa-solid fa-${o?'xmark':'bars'}"></i>`;o?loco&&loco.stop():loco&&loco.start()};
burger.onclick = () => setMenu(!menu.classList.contains('open'));

/* ===== SMOOTH SCROLL (Locomotive Scroll + GSAP ScrollTrigger) ===== */
let loco = null;
const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
const scroller = $('#scroller');
$$('.menu li').forEach((l,i)=>l.style.setProperty('--i',i));
if (window.gsap && window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
// Smooth scroll on desktop only; phones/tablets use native touch scrolling
if (window.LocomotiveScroll && !reduce && matchMedia('(hover:hover) and (pointer:fine)').matches) {
 loco = new LocomotiveScroll({el:scroller, smooth:true, lerp:.08, tablet:{smooth:false}, smartphone:{smooth:false}});
 if (window.ScrollTrigger) {
  loco.on('scroll', ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(scroller,{
   scrollTop(v){return arguments.length ? loco.scrollTo(v,{duration:0,disableLerp:true}) : loco.scroll.instance.scroll.y},
   getBoundingClientRect(){return {top:0,left:0,width:innerWidth,height:innerHeight}},
   pinType: scroller.style.transform ? 'transform' : 'fixed'});
  ScrollTrigger.defaults({scroller});
  ScrollTrigger.addEventListener('refresh',()=>loco.update());
 }
}
$$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
 const id=a.getAttribute('href'); if(id.length<2)return;
 const t=$(id); if(!t)return; e.preventDefault();
 if(menu.classList.contains('open')) setMenu(false);
 loco ? loco.scrollTo(t,{offset:-60}) : t.scrollIntoView({behavior:reduce?'auto':'smooth'});
}));
const setSolid=y=>nav.classList.toggle('solid',y>60);setSolid(0);
loco ? loco.on('scroll',a=>setSolid(a.scroll.y)) : addEventListener('scroll',()=>setSolid(scrollY),{passive:true});

/* ===== MODAL ===== */
const modal=$('#modal'); let cur=0, lastBtn=null;
const updEst=()=>{const p=products[cur],q=Math.max(+$('#mq').value||0,p.minQuantity);$('#mest').textContent=`Estimated total for ${q} pieces: ${fmt(total(p,q))}`};
$('#mq').addEventListener('input',updEst);
const closeModal=()=>{modal.classList.remove('open');loco&&loco.start();lastBtn&&lastBtn.focus()};
$('#grid').addEventListener('click',e=>{
 const b=e.target.closest('button[data-i]'); if(!b)return; lastBtn=b; cur=+b.dataset.i; const p=products[cur];
 $('#mimg').src=p.image; $('#mimg').alt='Custom '+p.name; $('#mt').textContent=p.name; $('#md').textContent=p.description;
 $('#mopts').innerHTML='<li style="list-style:none;margin-left:-18px;color:var(--gold);font-size:.78rem">Available customization</li>'+p.options.map(o=>`<li>${esc(o)}</li>`).join('');
 $('#mq').min=p.minQuantity; $('#mq').value=p.minQuantity; $('#mprice').textContent='Price: '+priceLabel(p); updEst();
 modal.classList.add('open'); loco&&loco.stop(); $('#mclose').focus();
});
$('#mclose').onclick=closeModal; modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
addEventListener('keydown',e=>{if(e.key==='Escape'&&modal.classList.contains('open'))closeModal()});
$('#mform').addEventListener('submit',e=>{
 e.preventDefault(); const p=products[cur], q=Math.max(+$('#mq').value,p.minQuantity), m=$('#mm').value.trim();
 const t=`Hello Ali Hassan Labels, I want to order Custom ${p.name}. Quantity: ${q} pieces. Estimated price: ${fmt(total(p,q))}.\nName: ${$('#mn').value}\nPhone: ${$('#mp').value}`+(m?`\nMessage: ${m}`:'');
 window.open(waURL(t),'_blank','noopener');
});
$('#cform').addEventListener('submit',e=>{
 e.preventDefault(); const q=Math.max(+$('#cq').value,100), m=$('#cm').value.trim(), f=$('#cf').files[0];
 const t=`Hello Ali Hassan Labels, I want to order Custom ${$('#cpr').value}. Quantity: ${q} pieces. Estimated price: ${fmt(total(products.find(x=>x.name===$('#cpr').value),q))}.\nName: ${$('#cn').value}\nPhone: ${$('#cp').value}`+(m?`\nMessage: ${m}`:'')+(f?`\nArtwork file: ${f.name} (I will attach it here)`:'');
 window.open(waURL(t),'_blank','noopener');
});

/* ===== FAQ ===== */
$$('.q button').forEach(b=>b.addEventListener('click',()=>{
 const open=b.getAttribute('aria-expanded')==='true', a=$('#'+b.getAttribute('aria-controls'));
 $$('.q button[aria-expanded=true]').forEach(o=>{if(o!==b){o.setAttribute('aria-expanded',false);gsap.to('#'+o.getAttribute('aria-controls'),{height:0,duration:.35})}});
 b.setAttribute('aria-expanded',!open); gsap.to(a,{height:open?0:'auto',duration:.4,ease:'power2.out',onComplete:()=>ScrollTrigger&&ScrollTrigger.refresh()});
}));

/* ===== REVIEW SLIDER (auto, buttons, dots, swipe) ===== */
(()=>{
 const tr=$('#track'), sl=$('#slider'), n=reviews.length; let i=0, timer;
 const per=()=>innerWidth<=600?1:innerWidth<=1024?2:3, max=()=>n-per();
 const pag=$('#pag'); pag.innerHTML=reviews.map((_,k)=>`<button aria-label="Review ${k+1}"></button>`).join('');
 const go=k=>{i=Math.min(Math.max(k,0),max()); const w=tr.children[0].offsetWidth+24; gsap.to(tr,{x:-i*w,duration:.7,ease:'power3.out'});
  [...pag.children].forEach((b,j)=>{b.classList.toggle('on',j===i);b.style.display=j>max()?'none':''})};
 const auto=()=>{clearInterval(timer);timer=setInterval(()=>go(i>=max()?0:i+1),5000)};
 $('#next').onclick=()=>{go(i>=max()?0:i+1);auto()}; $('#prev').onclick=()=>{go(i<=0?max():i-1);auto()};
 [...pag.children].forEach((b,j)=>b.onclick=()=>{go(j);auto()});
 let sx=null; sl.addEventListener('pointerdown',e=>sx=e.clientX);
 addEventListener('pointerup',e=>{if(sx===null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>50){go(dx<0?i+1:i-1);auto()}});
 addEventListener('resize',()=>go(i)); go(0); auto();
})();

/* ===== GSAP ANIMATIONS (zoom-in + blur reveals) ===== */
const zb={scale:.88,filter:'blur(16px)',opacity:0,y:50}, clr='transform,filter,opacity';
if (window.gsap && window.ScrollTrigger && !reduce) {
 gsap.from('.card',{scrollTrigger:{trigger:'#grid',start:'top 85%'},...zb,duration:1,stagger:.1,ease:'power3.out',clearProps:clr});
 $$('.rv,#products h2,#products .sub,#process h2,#reviews h2,#faq h2').forEach(el=>gsap.from(el,{scrollTrigger:{trigger:el,start:'top 90%'},...zb,duration:1.1,ease:'power3.out',clearProps:clr}));
 $$('.split .ph img').forEach(im=>gsap.from(im,{scale:1.45,duration:1.8,ease:'power3.out',scrollTrigger:{trigger:im,start:'top 85%'}}));
 gsap.from('.stat',{scrollTrigger:{trigger:'.stats',start:'top 85%'},...zb,duration:.9,stagger:.12,clearProps:clr});
 gsap.from('.step',{scrollTrigger:{trigger:'.steps',start:'top 80%'},...zb,duration:.9,stagger:.18,clearProps:clr});
 gsap.from('.fgrid>div',{scrollTrigger:{trigger:'footer',start:'top 92%'},...zb,y:30,duration:.9,stagger:.1,clearProps:clr});
 $$('.banner>img').forEach(im=>gsap.fromTo(im,{yPercent:-6},{yPercent:6,ease:'none',scrollTrigger:{trigger:im.parentNode,scrub:true}}));
 $$('.cnt').forEach(c=>{const o={v:0};gsap.to(o,{v:+c.dataset.to,duration:2,ease:'power1.out',scrollTrigger:{trigger:c,start:'top 92%',once:true},onUpdate:()=>c.textContent=Math.round(o.v)})});
 const wb=$('#wbox'); let wi=0; wb.innerHTML=`<span>${words[0]}</span>`;
 setInterval(()=>{const old=wb.firstChild; wi=(wi+1)%words.length; const nw=document.createElement('span'); nw.textContent=words[wi]; wb.appendChild(nw);
  gsap.fromTo(nw,{yPercent:100,opacity:0,filter:'blur(8px)'},{yPercent:0,opacity:1,filter:'blur(0px)',duration:.7,ease:'power3.out'});
  gsap.to(old,{yPercent:-100,opacity:0,duration:.6,onComplete:()=>old.remove()});},2200);
} else {
 $$('.cnt').forEach(c=>c.textContent=c.dataset.to); $('#wbox').textContent=words.join(' • ');
}
// Card spotlight follows the mouse
$('#grid').addEventListener('pointermove',e=>{const c=e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});

/* ===== LOADER ===== */
const loader=$('#loader'); let pageLoaded=document.readyState==='complete', ended=false;
addEventListener('load',()=>{pageLoaded=true;loco&&loco.update();window.ScrollTrigger&&ScrollTrigger.refresh()});
function intro(){
 if(!(window.gsap&&!reduce))return;
 gsap.from('.h-in',{y:60,scale:.92,filter:'blur(14px)',opacity:0,duration:1.3,stagger:.14,ease:'power3.out',clearProps:clr});
 gsap.from('#home video',{scale:1.25,duration:2.4,ease:'power2.out'});
 gsap.from('.hero-line',{scaleY:0,transformOrigin:'top',duration:1.2,delay:.6});
}
function endLoader(){
 if(ended)return; ended=true;
 const fin=()=>{loader.remove();document.body.style.overflow='';loco&&loco.start();loco&&loco.update();window.ScrollTrigger&&ScrollTrigger.refresh()};
 if(!(window.gsap&&!reduce)){fin();return}
 gsap.timeline({onComplete:fin}).to('.ld-bar,.ld-num,.ld-ring',{opacity:0,duration:.3})
  .to('#ldLogo span',{yPercent:-120,opacity:0,stagger:.025,duration:.5,ease:'power3.in'},'<')
  .to(loader,{yPercent:-100,duration:.9,ease:'power4.inOut'},'-=.15').add(intro,'-=.55');
}
if(window.gsap&&!reduce){
 document.body.style.overflow='hidden'; loco&&loco.stop();
 const lg=$('#ldLogo'); lg.innerHTML=[...lg.textContent].map(c=>`<span>${c===' '?'&nbsp;':c}</span>`).join('');
 gsap.from('#ldLogo span',{yPercent:110,opacity:0,stagger:.05,duration:.8,ease:'power3.out'});
 gsap.to('.ld-bar i',{scaleX:1,duration:2,ease:'power2.inOut'});
 const o={v:0}, num=$('.ld-num');
 gsap.to(o,{v:100,duration:2,ease:'power2.inOut',onUpdate:()=>num.textContent=Math.round(o.v)+'%',
  onComplete:()=>{const t=setInterval(()=>{if(pageLoaded){clearInterval(t);endLoader()}},100)}});
 setTimeout(endLoader,7000); // safety: never block the site
} else endLoader();

/* ===== CUSTOM CURSOR ===== */
if (matchMedia('(hover:hover) and (pointer:fine)').matches && window.gsap) {
 const dot=$('.cd'), ring=$('.cr');
 const mx=gsap.quickTo(ring,'x',{duration:.4,ease:'power3'}), my=gsap.quickTo(ring,'y',{duration:.4,ease:'power3'});
 addEventListener('mousemove',e=>{gsap.set(dot,{x:e.clientX,y:e.clientY});mx(e.clientX);my(e.clientY)});
 document.addEventListener('mouseover',e=>ring.classList.toggle('big',!!e.target.closest('a,button,.card,img,.ph')));
} else document.body.classList.remove('cur');