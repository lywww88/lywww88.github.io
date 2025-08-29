// ann.js
(function(){
  const KEY='ann_strip_collapsed_v1';
  const strip=document.querySelector('.ann-strip');
  const toggle=document.querySelector('.ann-toggle');
  const tab=document.querySelector('.ann-tab');
  if(!strip || !toggle || !tab) return;

  function collapse(persist=true){
    strip.classList.add('is-collapsed');
    tab.hidden=false;
    if(persist) try{ localStorage.setItem(KEY,'1'); }catch(e){}
  }
  function expand(persist=true){
    strip.classList.remove('is-collapsed');
    tab.hidden=true;
    if(persist) try{ localStorage.setItem(KEY,'0'); }catch(e){}
  }

  const forceShow=new URLSearchParams(location.search).get('showAnn')==='1';
  const saved=(()=>{ try{ return localStorage.getItem(KEY);}catch(e){ return null; } })();
  if (forceShow || saved!=='1') { expand(false); } else { collapse(false); }

  toggle.addEventListener('click', ()=> strip.classList.contains('is-collapsed') ? expand(true) : collapse(true));
  tab.addEventListener('click', ()=> expand(true));
})();
