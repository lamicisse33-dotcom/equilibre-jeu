/* ═══════════════════════════════════════════════════════════════════════
   ⚖️  ÉQUILIBRE — Les 4 Piliers de Vie · Service Worker
   © 2026 KHALAM (Khadi & Lamine). Tous droits réservés.

   Création originale protégée par le droit d'auteur. Aucune licence n'est
   accordée. Reproduction, modification, diffusion ou exploitation, totale
   ou partielle, interdites sans autorisation écrite préalable des auteurs.
   ═══════════════════════════════════════════════════════════════════════ */

/* Service Worker — Équilibre (PWA)
   - Rend l'app installable (iPhone/Android) et jouable hors-ligne.
   - HTML : réseau d'abord (tes mises à jour s'appliquent en ligne), repli cache hors-ligne.
   - Icônes/manifeste : cache d'abord.
   Pense à changer VERSION quand tu déploies une nouvelle version du jeu. */
const VERSION = "equilibre-v95-16";
const SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./apple-touch-icon.png"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(VERSION).then(function(cache){
      // best-effort : on ne bloque pas l'installation si une ressource manque
      return Promise.allSettled(SHELL.map(function(u){ return cache.add(u); }));
    })
  );
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k!==VERSION; })
        .map(function(k){ return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);

  // Ressources externes (PeerJS, Google Fonts…) : on laisse le navigateur gérer (réseau)
  if(url.origin !== self.location.origin) return;

  var estHTML = req.mode === "navigate" ||
                (req.headers.get("accept")||"").indexOf("text/html") !== -1;

  if(estHTML){
    // Réseau d'abord → cache en repli (hors-ligne)
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(VERSION).then(function(c){ c.put("./index.html", copy); });
        return res;
      }).catch(function(){
        return caches.match(req).then(function(m){ return m || caches.match("./index.html"); });
      })
    );
    return;
  }

  // Statique (icônes, manifeste) : cache d'abord → réseau
  e.respondWith(
    caches.match(req).then(function(m){
      return m || fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(VERSION).then(function(c){ c.put(req, copy); });
        return res;
      }).catch(function(){ return m; });
    })
  );
});
