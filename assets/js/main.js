const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const storageKey='theme';
function getTheme(){try{const s=localStorage.getItem(storageKey);if(s==='dark'||s==='light')return s}catch{}return window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}
function setTheme(t){document.documentElement.setAttribute('data-theme',t);document.documentElement.style.colorScheme=t;const b=document.getElementById('theme-toggle');if(b){b.setAttribute('aria-label',t==='dark'?'Switch to light theme':'Switch to dark theme')}try{localStorage.setItem(storageKey,t)}catch{}}
setTheme(getTheme());
document.getElementById('theme-toggle')?.addEventListener('click',()=>setTheme(document.documentElement.getAttribute('data-theme')==='dark'?'light':'dark'));
const toggle=document.querySelector('.menu-toggle'),links=document.querySelector('.nav-links');
if(toggle&&links){toggle.addEventListener('click',()=>{const o=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(o))});}

function renderLucide(){if(window.lucide&&typeof window.lucide.createIcons==='function'){window.lucide.createIcons();return true}return false}
function loadIconLibrary(src,onFail){const s=document.createElement('script');s.src=src;s.defer=true;s.onload=()=>{if(!renderLucide()&&onFail)onFail()};s.onerror=()=>{if(onFail)onFail()};document.head.appendChild(s)}
if(!renderLucide()){
  loadIconLibrary('https://cdn.jsdelivr.net/npm/lucide@0.468.0/dist/umd/lucide.min.js',()=>{
    loadIconLibrary('https://unpkg.com/lucide@0.468.0/dist/umd/lucide.min.js');
  });
}
