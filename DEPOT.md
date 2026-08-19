# Dépôt GitHub — ÉQUILIBRE v97.24

## Ce qu'il faut envoyer

**Deux fichiers, à la racine, en écrasant les anciens. C'est tout.**

| Fichier | Poids |
|---|---|
| `index.html` | 2,12 Mo |
| `sw.js` | 3,7 Ko |

**Le dossier `assets/` n'est plus nécessaire.** Les sept images et le son du
Bonus du Sage sont maintenant embarqués dans `index.html`. Si tu l'avais déjà
créé, tu peux le laisser : il ne sert plus, mais il ne gêne pas.

---

## Vérification après l'envoi

1. Ouvrir le site, **fermer complètement la PWA**, rouvrir.
2. Contrôler **v97.24** au pied du menu.
3. Lancer une partie jusqu'au premier bonus : le Sage doit apparaître sur son
   paysage aux quatre éléments, avec ses quatre orbes texturées.
4. Mode avion puis réouverture : le jeu doit se lancer hors ligne.

---

## Versions

- `BUILD_TAG = "v97.24"` dans `index.html`
- `VERSION = "equilibre-v97-24"` dans `sw.js`

---

## ⚠️ Cette version REMET TOUS LES PROFILS À ZÉRO

Au premier lancement après ce dépôt, chaque téléphone efface : pseudo, XP,
niveau, rang de Campagne, scores, cauris, habillages achetés, parties en cours.
Une seule fois — ensuite la progression se conserve normalement.

Préviens tes testeurs : ils devront ressaisir leur pseudo.

---

## Restant ouvert

- `MODE_TEST = true` : la boutique offre tout, rien n'est débité.
- Cas « aucune carte pour ce combo » en Duel : présentation encore différente
  du Solo (grande carte Échange + bouton PASSER).
- Cartes légendaires en Duel : encore à chaque partie, faute d'accord entre les
  deux téléphones (en Solo : une partie sur trois).
