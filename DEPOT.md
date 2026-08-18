# Dépôt GitHub — ÉQUILIBRE v97.10

## Ce qu'il faut envoyer

### 1. À la racine (écraser les fichiers existants)

| Fichier | Poids |
|---|---|
| `index.html` | 1,89 Mo |
| `sw.js` | 3,9 Ko |

### 2. Nouveau dossier `assets/` — à créer, **une seule fois**

| Fichier | Poids |
|---|---|
| `assets/canne.webp` | 33,6 Ko |
| `assets/decor.webp` | 84,4 Ko |
| `assets/boule_eau.webp` | 11,4 Ko |
| `assets/boule_plante.webp` | 10,4 Ko |
| `assets/boule_feu.webp` | 9,6 Ko |
| `assets/boule_air.webp` | 7,0 Ko |
| `assets/voix_sage.mp3` | 24,5 Ko |

**Sans ce dossier, le Bonus du Sage s'affiche vide.** Les images ne sont plus
en base64 dans la page, elles sont externes.

---

## Ce qui doit déjà être en place (ne pas y toucher)

- `.nojekyll` — à créer directement sur GitHub s'il a disparu
- `CNAME` — `tonequilibre.khalam.app`
- `manifest.json`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`

---

## Vérifications après l'envoi

1. Ouvrir le site, **fermer complètement la PWA**, rouvrir.
2. Contrôler `v97.10` au pied du menu — c'est le seul juge.
3. Lancer une partie : au premier bonus, le Sage doit apparaître avec son décor
   et ses quatre boules. Si le fond est noir, le dossier `assets/` manque.
4. Passer en mode avion et rouvrir : le jeu doit se lancer hors ligne.

---

## Versions

- `BUILD_TAG = "v97.10"` dans `index.html`
- `VERSION = "equilibre-v97-10"` dans `sw.js`

Les deux ont été bumpés ensemble.

---

## Ce que contient cette version

- **Bonus du Sage** refondu, intégré à sa place (CSS, calque, `SB_SON` + `BONUS_SAGE`)
- **Verdict de la Balance** entièrement retiré du jeu
- **Service worker réparé** : il listait cinq fichiers `theme-*.webp` absents.
  `addAll` étant tout ou rien, un seul 404 empêchait toute mise en cache —
  le jeu ne fonctionnait donc **jamais** hors ligne. Corrigé.
- **Trois habillages payants réparés** : Village Ancien, Nuit des Ancêtres et
  Le Seuil d'Or pointaient vers ces mêmes fichiers absents ; le joueur payait
  300 cauris pour un simple voile sombre. Dégradés peints à la place.
- Menu, écran de Duel et bas de menu habillés depuis tes planches
- Mode d'emploi débarrassé de ses redites
- **Musique réparée** : sur iPhone le contexte audio démarre endormi, la musique
  était lancée dans le vide et rien ne la relançait. Elle repart au premier
  toucher et au retour dans l'app, menu comme partie.
- **Ambiance du menu** (kalimba) désormais audible, distincte de la musique de partie
- **Chaque touche répond** : clic et vibration brève sur tous les boutons

---

## Restant ouvert (non traité, à ta main)

- `MODE_TEST = true` (ligne ~2208) : la boutique offre tout, rien n'est débité.
- La carte de résultat du bonus affiche « Touchez pour continuer » mais se ferme
  seule après 1200 ms, sans écouteur de clic.
