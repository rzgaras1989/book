/* © 2026 Rzgar Saeed — Rawen Group */
const V="bp-13018ae2";
const FILES=["./", "index.html", "exam.html", "manifest.webmanifest", "s.5c81d767.css", "k.4881bfc9.js", "d.70d6cf8c.js", "a.d024f187.js", "e.185c8dfc.css", "x.cc3b4105.js", "i.43e2ccc9.js", "j.90e2dda4.js", "n.52258095.js", "h.b987dc0c.js", "p.5aaf5dee.js", "t.8f01a054.js", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("bp-")&&k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request; if(r.method!=="GET")return;
  const u=new URL(r.url); if(u.origin!==location.origin)return;
  e.respondWith(caches.match(r,{ignoreSearch:true}).then(hit=>hit||fetch(r).then(res=>{
    if(res&&res.ok){const cp=res.clone();caches.open(V).then(c=>c.put(r,cp))}
    return res;
  }).catch(()=>r.mode==="navigate"?caches.match("./"):Response.error())));
});
