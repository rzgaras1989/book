/* © 2026 Rzgar Saeed — Rawen Group */
const V="bp-c59c780f";
const FILES=["./", "index.html", "exam.html", "manifest.webmanifest", "s.2b3c6052.css", "k.4881bfc9.js", "d.8d4d53c2.js", "a.775ebb94.js", "e.116270b5.css", "x.1786fdfd.js", "h.b987dc0c.js", "p.5aaf5dee.js", "icons/apple-touch-icon.png", "icons/favicon-32.png", "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-192.png", "icons/maskable-512.png"];
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
