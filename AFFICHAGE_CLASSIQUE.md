# Affichage classique — v98.44

Les visuels d'origine (table, rideau, piliers, cartes et emblèmes) sont conservés.

- Téléphone portrait : disposition de la première maquette choisie, 3 / 3 / 4 cartes.
- Ordinateur et grand écran : disposition de la deuxième maquette choisie, 5 / 5 cartes.
- Téléphone paysage court : informations et piliers à gauche, table à droite.
- Les mains de 11 ou 12 cartes et les mains en fin de partie restent prises en charge.
- Les choix de réponse, l'Espion, l'Échange et les résultats disposent d'un défilement interne si nécessaire. Le moteur du jeu n'est pas modifié.
- La loupe se dimensionne selon la place réellement disponible.
- Le cache PWA est versionné avec le même numéro que l'interface. Aucune migration ou remise à zéro des profils.

## Retour immédiat, par appareil

Réglages → Présentation de la table → ANCIEN → Enregistrer et fermer.
Le choix est stocké séparément du profil. La partie et la progression restent intactes.
Le rendu de table précédent est conservé dans `aperçuMainAncien` ; toutes les nouvelles règles CSS sont conditionnées par `affichage-classique`.

## Point de restauration complet

Branche : `restauration/avant-affichage-classique-2026-11-08`
Commit de départ : `ff088637195ccc93f3b27ca22f487992b1f87635` (v98.43).

Pour rétablir intégralement les deux fichiers publiés, depuis la branche de publication :

```sh
git restore --source=restauration/avant-affichage-classique-2026-11-08 -- index.html sw.js
git commit -m "Restaurer l'affichage v98.43"
git push origin main
```

Cela produit un nouveau commit sans effacer l'historique. Vérifier la publication GitHub Pages puis la version affichée dans le menu. Dans une PWA, accepter la mise à jour proposée.

## Vérifications

- Analyse syntaxique de tous les scripts intégrés et de `sw.js`.
- Comparaison des illustrations embarquées et du moteur `G` avec la version de départ : identiques.
- Comparaison du rendu de table ancien : identique (seul le nom de fonction change).
- Parcours local de 27 écrans/états sur six formats : 390×844, 360×640, 430×932, 844×390, 1366×768, 1920×1080.
- Deux débordements du premier parcours sur le téléphone paysage corrigés puis contrôlés à nouveau.
- Navigation réelle : choix du pilier, carte réponse, décision de joker, score de manche.
- Réglages : aller-retour classique / ancien pendant la même partie.

Le rendu Duel a été contrôlé avec un état de test local ; une connexion entre deux appareils n'a pas été rejouée pour cette modification de présentation. Les contrôles de mise en page utilisent Chromium ; un appareil iOS et une télévision physiques restent à vérifier par l'utilisateur.
