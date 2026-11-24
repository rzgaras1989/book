/* © 2026 Rzgar Saeed — Rawen Group */
const V="bp-07990276";
const FILES=["./", "index.html", "exam.html", "manifest.webmanifest", "s.0ea73522.css", "k.4881bfc9.js", "d.a1b8577e.js", "a.ba76d9b3.js", "e.185c8dfc.css", "x.fb5b0fdb.js", "i.e232768e.js", "j.d3673b92.js", "n.0acfae4e.js", "h.b987dc0c.js", "p.5aaf5dee.js", "t.8f01a054.js", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png"];
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
