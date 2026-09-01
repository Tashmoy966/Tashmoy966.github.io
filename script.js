const header=document.querySelector('.site-header');
const progress=document.getElementById('scrollProgress');
const menuButton=document.getElementById('menuButton');
const navLinks=document.getElementById('navLinks');
const navAnchors=[...document.querySelectorAll('.nav-links a')];
const sections=[...document.querySelectorAll('main section[id]')];
document.getElementById('year').textContent=new Date().getFullYear();

function onScroll(){
  const root=document.documentElement;
  const max=root.scrollHeight-root.clientHeight;
  progress.style.width=max>0?`${(root.scrollTop/max)*100}%`:'0%';
  header.classList.toggle('scrolled',window.scrollY>28);
  let current='';
  for(const section of sections){if(window.scrollY>=section.offsetTop-180) current=section.id;}
  navAnchors.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${current}`));
}
window.addEventListener('scroll',onScroll,{passive:true}); onScroll();

menuButton?.addEventListener('click',()=>{
  const open=navLinks.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
  document.body.classList.toggle('menu-open',open);
});
navAnchors.forEach(a=>a.addEventListener('click',()=>{
  navLinks.classList.remove('open'); menuButton?.setAttribute('aria-expanded','false'); document.body.classList.remove('menu-open');
}));

if('IntersectionObserver' in window){
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}
  }),{threshold:.1,rootMargin:'0px 0px -40px'});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
