---
sidebar_position: 12
title: Algorithmique et programmation
description: Fiche de révision CRPE - Algorithmique et programmation
---

# Algorithmique et programmation

:::info Informations
**Matière** : Mathématiques  
**Niveau** : Cycles 2, 3 et 4  
**Durée de révision estimée** : 50 min
:::

---

## 📚 I. Rappel du cours

### A. Qu'est-ce qu'un algorithme ?

#### 1. Définition

**Algorithme** : Suite d'instructions précises et ordonnées permettant de résoudre un problème ou d'effectuer une tâche.

**Caractéristiques** :
- **Précis** : chaque instruction est claire
- **Ordonné** : les étapes sont dans un ordre logique
- **Fini** : l'algorithme se termine
- **Efficace** : résout le problème

**Exemples quotidiens** :
- Recette de cuisine
- Mode d'emploi d'un appareil
- Itinéraire pour aller quelque part
- Algorithme de calcul (addition posée)

#### 2. Représentation d'un algorithme

**En langage naturel** :
```
1. Prendre deux nombres a et b
2. Calculer la somme s = a + b
3. Afficher le résultat s
```

**Avec un organigramme** :
```
[Début]
   ↓
[Saisir a et b]
   ↓
[Calculer s = a + b]
   ↓
[Afficher s]
   ↓
[Fin]
```

**Avec un langage de programmation** : Scratch, Python, etc.

### B. Structures de base

#### 1. Séquence

**Définition** : Instructions exécutées l'une après l'autre.

**Exemple** :
```
Avancer de 10 pas
Tourner de 90°
Avancer de 10 pas
```

#### 2. Boucle (répétition)

**Boucle "Répéter n fois"** :
```
Répéter 4 fois:
    Avancer de 10
    Tourner de 90°
```
→ Dessine un carré

**Boucle "Tant que"** :
```
Tant que (x < 10):
    x = x + 1
```

**Boucle "Pour"** :
```
Pour i de 1 à 5:
    Afficher i
```
→ Affiche 1, 2, 3, 4, 5

#### 3. Test (condition)

**Structure Si...Alors...Sinon** :
```
Si (température > 25):
    Afficher "Il fait chaud"
Sinon:
    Afficher "Il fait frais"
```

**Exemple mathématique** :
```
Si (nombre est pair):
    Diviser par 2
Sinon:
    Multiplier par 3 et ajouter 1
```

#### 4. Variables

**Variable** : Espace mémoire qui stocke une valeur.

**Exemple** :
```
score = 0
score = score + 10  → score vaut maintenant 10
score = score + 5   → score vaut maintenant 15
```

**Types de variables** :
- **Nombre** : 5, 3.14, -7
- **Texte** (chaîne) : "Bonjour", "Marie"
- **Booléen** : Vrai ou Faux

### C. Scratch

#### 1. Présentation

**Scratch** : Langage de programmation visuel créé par le MIT pour l'apprentissage.

**Principe** : Assembler des blocs colorés comme des briques.

**Catégories de blocs** :
- **Mouvement** : avancer, tourner, aller à...
- **Apparence** : dire, penser, montrer, cacher...
- **Son** : jouer un son...
- **Événements** : quand drapeau cliqué, quand touche pressée...
- **Contrôle** : répéter, si...alors, attendre...
- **Capteurs** : touche espace pressée, distance à...
- **Opérateurs** : +, -, ×, ÷, =, `<`, `>`...
- **Variables** : créer, modifier une variable

#### 2. Exemples de programmes

**Programme 1 : Carré**
```
Quand [drapeau vert] cliqué
Répéter [4] fois
    Avancer de [100] pas
    Tourner de [90] degrés
```

**Programme 2 : Compteur**
```
Quand [drapeau vert] cliqué
Mettre [score] à [0]
Répéter [10] fois
    Ajouter [1] à [score]
    Dire [score] pendant [0.5] secondes
```

**Programme 3 : Devinette**
```
Quand [drapeau vert] cliqué
Mettre [nombre secret] à [nombre aléatoire entre 1 et 10]
Demander [Devine le nombre] et attendre
Si [réponse = nombre secret] alors
    Dire [Bravo !]
Sinon
    Dire [Raté !]
```

#### 3. Concepts clés

**Lutins (sprites)** : Personnages ou objets programmables

**Scène** : Arrière-plan où évoluent les lutins

**Coordonnées** : Position (x, y) sur la scène

**Événements** : Déclencheurs (clic sur drapeau, touche pressée, lutins qui se touchent...)

**Messages** : Communication entre lutins

### D. Algorithmes classiques

#### 1. Recherche du maximum

**Problème** : Trouver le plus grand nombre dans une liste.

**Algorithme** :
```
max = premier nombre
Pour chaque nombre dans la liste:
    Si nombre > max:
        max = nombre
Afficher max
```

**Exemple** : [5, 12, 3, 18, 7]
- max = 5
- 12 `>` 5 → max = 12
- 3 `<` 12 → max reste 12
- 18 `>` 12 → max = 18
- 7 `<` 18 → max reste 18
- **Résultat : 18**

#### 2. Recherche dans une liste

**Problème** : Un nombre x est-il dans la liste ?

**Algorithme** :
```
trouvé = Faux
Pour chaque nombre dans la liste:
    Si nombre = x:
        trouvé = Vrai
Si trouvé:
    Afficher "Oui"
Sinon:
    Afficher "Non"
```

#### 3. Tri d'une liste

**Tri par sélection** (simplifié) :
```
Pour i de 1 à n-1:
    Trouver le minimum entre i et n
    Échanger avec la position i
```

**Exemple** : [5, 2, 8, 1]
- Étape 1 : min=1, échanger → [1, 2, 8, 5]
- Étape 2 : min=2, ok → [1, 2, 8, 5]
- Étape 3 : min=5, échanger → [1, 2, 5, 8]
- **Résultat : [1, 2, 5, 8]**

#### 4. Algorithme d'Euclide (PGCD)

**Principe** : Soustractions successives.

**Algorithme** :
```
Tant que a ≠ b:
    Si a > b:
        a = a - b
    Sinon:
        b = b - a
PGCD = a
```

**Exemple** : PGCD(48, 18)
- 48 `>` 18 → a = 30
- 30 `>` 18 → a = 12
- 12 `<` 18 → b = 6
- 12 `>` 6 → a = 6
- a = b = 6 → **PGCD = 6**

### E. Débogage

**Bug** : Erreur dans un programme.

**Débogage** : Processus de recherche et correction des erreurs.

**Types d'erreurs** :
- **Syntaxe** : instruction mal écrite
- **Logique** : programme ne fait pas ce qu'on veut
- **Exécution** : division par zéro, dépassement...

**Méthodes** :
- **Exécution pas à pas** : suivre l'algorithme étape par étape
- **Affichage intermédiaire** : afficher les variables
- **Tests** : tester avec différentes valeurs

---

## 🎯 II. Mise en pratique - Exercices

:::tip Objectif pédagogique
Maîtriser les bases de l'algorithmique et de la programmation.
:::

### Exercice 1 : Algorithme en langage naturel

**Niveau** : CM1/CM2

Écrire un algorithme pour calculer le périmètre d'un rectangle de longueur L et largeur l.

**Correction** :
```
1. Saisir L (longueur)
2. Saisir l (largeur)
3. Calculer P = 2 × (L + l)
4. Afficher P
```

### Exercice 2 : Trace d'exécution

**Niveau** : 5ᵉ

Que fait cet algorithme ?
```
n = 5
résultat = 1
Pour i de 1 à n:
    résultat = résultat × i
Afficher résultat
```

**Correction** :
- i=1 : résultat = 1×1 = 1
- i=2 : résultat = 1×2 = 2
- i=3 : résultat = 2×3 = 6
- i=4 : résultat = 6×4 = 24
- i=5 : résultat = 24×5 = 120
- **Affiche : 120 (factorielle de 5)**

### Exercice 3 : Condition

**Niveau** : 4ᵉ

Écrire un algorithme qui affiche "pair" si un nombre est pair, "impair" sinon.

**Correction** :
```
Saisir n
Si (n modulo 2 = 0):
    Afficher "pair"
Sinon:
    Afficher "impair"
```

### Exercice 4 : Boucle

**Niveau** : 3ᵉ

Écrire un algorithme qui affiche les nombres de 1 à 10.

**Correction** :
```
Pour i de 1 à 10:
    Afficher i
```

**Ou avec tant que** :
```
i = 1
Tant que i ≤ 10:
    Afficher i
    i = i + 1
```

### Exercice 5 : Scratch - Dessiner un triangle équilatéral

**Niveau** : 6ᵉ

Écrire le programme Scratch pour dessiner un triangle équilatéral de côté 100.

**Correction** :
```
Quand [drapeau vert] cliqué
Stylo en position d'écriture
Répéter [3] fois:
    Avancer de [100] pas
    Tourner de [120] degrés
```

---

## 👩‍🏫 III. Pédagogie et didactique

### A. Progression par cycles

**Cycle 2 (CP-CE2)** :
- **CP-CE1** : Déplacements sur quadrillage, jeux de robot
- **CE2** : Séquences simples (Bee-Bot, Blue-Bot)

**Cycle 3 (CM1-6ᵉ)** :
- **CM1** : Introduction à Scratch, séquences et boucles
- **CM2** : Scratch : variables, conditions simples
- **6ᵉ** : Scratch : programmes plus complexes, capteurs

**Cycle 4 (5ᵉ-3ᵉ)** :
- **5ᵉ** : Scratch avancé, introduction Python
- **4ᵉ** : Algorithmes (recherche, tri), Python
- **3ᵉ** : Algorithmique approfondie, projets

### B. Difficultés fréquentes des élèves

**Conceptuelles** :
- Ne pas comprendre le concept de variable
- Confondre = (affectation) et = (égalité mathématique)
- Difficulté avec les boucles imbriquées
- Ne pas penser à tous les cas (tests incomplets)

**Pratiques** :
- Erreurs de syntaxe dans les programmes
- Oubli de blocs dans Scratch
- Boucles infinies
- Variables non initialisées

**Logiques** :
- Algorithme ne fait pas ce qu'on veut (bug logique)
- Difficulté à décomposer un problème
- Ne pas tester suffisamment

### C. Activités pédagogiques recommandées

**Sans ordinateur (unplugged)** :
- **Jeu du robot** : donner des instructions à un camarade
- **Pixel art** : suivre un algorithme de coloriage
- **Tri de cartes** : algorithme de tri concret
- **Chasse au trésor** : séquence d'instructions

**Avec robots** :
- **Bee-Bot / Blue-Bot** (cycle 2) : robot simple
- **Thymio** (cycle 3) : robot programmable
- **Lego Mindstorms** (cycle 4) : robotique avancée

**Avec Scratch** :
- **Animations** : faire bouger un personnage
- **Jeux simples** : casse-briques, attrape-objets
- **Histoires interactives** : choix multiples
- **Simulations** : mouvement, rebonds

**Projets** :
- **Labyrinthe** : guider un personnage
- **Quiz** : questionnaire interactif
- **Calculatrice** : opérations de base
- **Dessin géométrique** : figures avec Scratch

**Algorithmes à étudier** :
- Recherche du maximum/minimum
- Moyenne d'une liste
- Nombre de voyelles dans un texte
- Deviner un nombre (dichotomie simple)

### D. Erreurs à éviter en tant qu'enseignant

**Erreurs conceptuelles** :
- Penser que l'algorithmique = savoir coder
- Ne pas faire de débranchée (unplugged)
- Oublier que l'algorithmique aide au raisonnement mathématique

**Erreurs pédagogiques** :
- Montrer le code sans expliquer la logique
- Ne pas laisser les élèves tâtonner
- Donner des projets trop complexes trop vite
- Ne pas valoriser les erreurs (essai-erreur)
- Oublier le lien avec les maths

**Bonnes pratiques** :
- Commencer par du unplugged
- Décomposer les problèmes
- Faire tester et déboguer
- Valoriser la créativité
- Relier aux mathématiques (géométrie, calculs)

---

## 🎓 IV. Pour le jour du concours

**Cette notion peut tomber** :
- ✅ À l'écrit : Trace d'algorithme, écrire un algorithme simple
- ✅ À l'oral : Séquence avec Scratch, analyse d'erreur, progression

**Points de vigilance** :
- Connaître les **structures de base** (séquence, boucle, test)
- Savoir faire une **trace d'exécution**
- Comprendre le concept de **variable**
- Connaître **Scratch** (blocs principaux)
- Savoir écrire un **algorithme simple** en langage naturel
- Connaître la **progression** par cycles
- Faire le lien avec les **mathématiques**

**Attendus du jury** :
- Maîtrise des concepts de base
- Capacité à proposer des **activités unplugged**
- Utilisation de **Scratch** (montrer des exemples)
- Proposer des **projets** adaptés au niveau
- Lien avec les **compétences mathématiques**
- Valorisation de l'**essai-erreur** et du débogage
- Développement de la **pensée algorithmique**

**Erreurs à éviter le jour J** :
- Confondre programmation et algorithmique
- Ne pas connaître Scratch
- Proposer uniquement des activités sur écran
- Oublier le lien avec les maths
- Ne pas valoriser le tâtonnement
- Proposer des projets trop complexes

**Conseils pour l'oral** :
- Montrer des **activités unplugged** (jeu du robot)
- Présenter un **projet Scratch** simple et progressif
- Proposer des **jeux** (labyrinthe, quiz)
- Faire le lien avec la **géométrie** (dessiner des figures)
- Utiliser des **robots** si disponibles
- Insister sur la **décomposition** de problèmes
- Valoriser l'**erreur** comme apprentissage

**Questions pièges du jury** :
- "Différence entre algorithme et programme ?" → Algorithme = méthode, programme = implémentation
- "Pourquoi enseigner l'algorithmique en primaire ?" → Pensée logique, décomposition, résolution de problèmes
- "À quel cycle introduire Scratch ?" → Cycle 3 (CM1), sensibilisation en CE2
- "Scratch ou Python ?" → Scratch au cycle 3, Python au cycle 4
- "Qu'est-ce qu'une variable ?" → Espace mémoire qui stocke une valeur modifiable

### Questions types CRPE

**Question 1** : Qu'est-ce qu'un algorithme ? Donnez 3 exemples de la vie quotidienne et expliquez pourquoi l'algorithmique est importante en mathématiques.

<details>
<summary>Voir la réponse</summary>

**Définition** :

Un **algorithme** est une suite finie et ordonnée d'instructions précises permettant de résoudre un problème ou d'accomplir une tâche.

**Caractéristiques essentielles** :
1. **Précis** : chaque étape est clairement définie
2. **Fini** : l'algorithme se termine toujours
3. **Ordonné** : les instructions sont dans un ordre logique
4. **Efficace** : permet d'atteindre le résultat voulu

**3 exemples de la vie quotidienne** :

**Exemple 1 - Recette de cuisine** :
```
1. Préchauffer le four à 180°C
2. Mélanger 200g de farine, 100g de sucre, 3 œufs
3. Verser dans un moule
4. Enfourner 30 minutes
5. Laisser refroidir
```
→ Algorithme car : précis, fini, ordonné, résout un problème (faire un gâteau)

**Exemple 2 - Algorithme de division posée** :
```
1. Chercher combien de fois le diviseur entre dans les premiers chiffres
2. Écrire ce chiffre au quotient
3. Multiplier et soustraire
4. Abaisser le chiffre suivant
5. Recommencer jusqu'à épuisement
```
→ Procédure systématique pour diviser

**Exemple 3 - Itinéraire GPS** :
```
1. Partir du point A
2. Avancer 500m
3. Tourner à droite
4. Avancer 200m
5. Arrivée au point B
```
→ Suite d'instructions pour aller d'un point à un autre

**Importance en mathématiques** :

**1. Développe la pensée logique et structurée** :
- Décomposer un problème en étapes
- Organiser son raisonnement
- Anticiper les différents cas

**2. Aide à la résolution de problèmes** :
- Méthode systématique
- Vérification possible
- Débogage (correction d'erreurs)

**3. Formalise des méthodes mathématiques** :
- Algorithme d'Euclide (PGCD)
- Algorithme de division
- Méthode de résolution d'équations

**4. Rend les maths concrètes** :
- On "fait" les maths au lieu de juste calculer
- On comprend le "comment" et le "pourquoi"
- Lien avec l'informatique (outil moderne)

**5. Développe des compétences transversales** :
- Rigueur
- Précision
- Persévérance (débogage)
- Créativité (trouver des solutions)

**Exemple concret en classe** :

**Algorithme pour tracer un carré** (CM1) :
```
1. Avancer de 5 cm
2. Tourner de 90° vers la droite
3. Répéter l'étape 1-2 quatre fois au total
```

→ Relie géométrie et algorithmique, développe la pensée logique, permet de comprendre la structure d'un carré.

</details>

**Question 2** : Un élève de CM2 programme un carré dans Scratch mais obtient un pentagone. Analysez l'erreur et proposez une remédiation.

<details>
<summary>Voir la réponse</summary>

**Programme de l'élève** (supposé) :

```
Quand [drapeau vert] cliqué
Stylo en position d'écriture
Répéter [4] fois:
    Avancer de [100] pas
    Tourner de [72] degrés  ← ERREUR
```

**Résultat obtenu** : Pentagone (5 côtés)

**Analyse de l'erreur** :

**Erreur** : L'élève a utilisé un angle de **72°** au lieu de **90°**.

**Origine** :
- **Confusion** : 360° ÷ 5 = 72° (angle pour un pentagone)
- L'élève a peut-être pensé qu'il fallait diviser 360° par le nombre de côtés
- Ou il a fait un pentagone avant et a gardé la même valeur

**Pourquoi 72° donne un pentagone ?** :
- 72° × 5 = 360° (tour complet)
- Donc avec 72°, on fait 5 côtés pour revenir au départ

**Pourquoi il faut 90° pour un carré ?** :
- 90° × 4 = 360° (tour complet)
- Angle extérieur du carré = 90°

**Remédiation proposée** :

**Phase 1 - Prise de conscience** (10 min)
- "Combien de côtés as-tu obtenu ?" → 5
- "Combien voulais-tu ?" → 4
- "Essayons de comprendre pourquoi"

**Phase 2 - Manipulation concrète** (15 min)
- **Activité débranché** : Se déplacer dans la cour
- Consignes :
  1. Avancer de 5 pas
  2. Tourner de 72°
  3. Répéter 5 fois
- Observer : on fait un pentagone !
- Recommencer avec 90° et 4 répétitions → carré !

**Phase 3 - Comprendre la règle** (15 min)
- **Angle et nombre de côtés** :
  - Pour faire un tour complet : 360°
  - Carré (4 côtés) : 360° ÷ 4 = 90°
  - Pentagone (5 côtés) : 360° ÷ 5 = 72°
  - Hexagone (6 côtés) : 360° ÷ 6 = 60°

- **Formule générale** :
  - Angle = 360° ÷ nombre de côtés

**Phase 4 - Correction dans Scratch** (10 min)
- Modifier le programme :
```
Quand [drapeau vert] cliqué
Stylo en position d'écriture
Répéter [4] fois:
    Avancer de [100] pas
    Tourner de [90] degrés  ← CORRIGÉ
```
- Tester → Carré obtenu !

**Phase 5 - Généralisation** (10 min)
- Créer un programme avec une variable "côtés" :
```
Demander [Combien de côtés ?] et attendre
Mettre [côtés] à [réponse]
Mettre [angle] à [360 / côtés]
Répéter [côtés] fois:
    Avancer de [100]
    Tourner de [angle] degrés
```
- Tester avec 4, 5, 6, 8 côtés

**Trace écrite** :

```
POLYGONES RÉGULIERS AVEC SCRATCH

Pour dessiner un polygone à n côtés :
- Répéter n fois
- Angle de rotation = 360° ÷ n

Exemples :
- Triangle (3) : 360° ÷ 3 = 120°
- Carré (4) : 360° ÷ 4 = 90°
- Pentagone (5) : 360° ÷ 5 = 72°
- Hexagone (6) : 360° ÷ 6 = 60°
```

**Point pédagogique** : Cette erreur est une excellente occasion d'enseigner :
- La relation entre angle et nombre de côtés
- Le lien géométrie-programmation
- L'importance du débogage
- La généralisation avec des variables

</details>

**Question 3** : Proposez une séquence de 3 séances pour introduire les boucles avec Scratch en CM2.

<details>
<summary>Voir la réponse</summary>

**Séquence : Les boucles avec Scratch**  
**Niveau** : CM2  
**Durée** : 3 séances de 55 minutes

---

**SÉANCE 1 - Découverte : Pourquoi répéter ? (55 min)**

**Objectif** : Comprendre l'intérêt des boucles

**Matériel** : Ordinateurs avec Scratch, vidéoprojecteur

**Déroulement** :

1. **Activité débranchée** (15 min)
   - "Comment donner les instructions pour faire 5 pas ?"
   - Élève 1 : "Avancer, avancer, avancer, avancer, avancer"
   - "C'est long ! Il y a plus simple ?"
   - Élève 2 : "Répéter 5 fois : avancer"
   - **Introduction : la répétition (boucle)**

2. **Découverte dans Scratch** (20 min)
   - Projet : faire avancer le chat de 500 pas
   
   **Sans boucle** :
   ```
   Avancer de [100] pas
   Avancer de [100] pas
   Avancer de [100] pas
   Avancer de [100] pas
   Avancer de [100] pas
   ```
   → 5 blocs, long !
   
   **Avec boucle** :
   ```
   Répéter [5] fois
       Avancer de [100] pas
   ```
   → 1 seul bloc "Répéter", plus court !

3. **Premiers essais** (15 min)
   - Faire avancer de 1000 pas (répéter 10 fois 100)
   - Faire tourner 4 fois de 90° (tour complet)
   - Faire dire "Bonjour" 3 fois

4. **Trace écrite** (5 min)
   - **Boucle** = répéter plusieurs fois la même chose
   - **Bloc Scratch** : "Répéter [n] fois"
   - **Avantage** : code plus court et plus clair

---

**SÉANCE 2 - Application : Dessiner des figures (55 min)**

**Objectif** : Utiliser les boucles pour dessiner

**Déroulement** :

1. **Rappel** (5 min)
   - "Qu'est-ce qu'une boucle ?"
   - Montrer le bloc "Répéter"

2. **Défi 1 : Tracer un carré** (20 min)
   - Consigne : "Avec le stylo, dessinez un carré de 100 pas de côté"
   - Recherche individuelle
   - Mise en commun :
   ```
   Stylo en position d'écriture
   Répéter [4] fois
       Avancer de [100] pas
       Tourner de [90] degrés
   ```

3. **Défi 2 : Tracer d'autres polygones** (20 min)
   - Triangle équilatéral (3 côtés, 120°)
   - Hexagone (6 côtés, 60°)
   - Observer le pattern : angle = 360° ÷ côtés

4. **Projet libre** (10 min)
   - Dessiner une figure de son choix avec boucles
   - Partage à la classe

---

**SÉANCE 3 - Approfondissement : Boucles imbriquées (55 min)**

**Objectif** : Comprendre les boucles dans les boucles

**Déroulement** :

1. **Problème** (10 min)
   - "Comment dessiner 4 carrés côte à côte ?"
   - Réflexion : répéter le programme du carré 4 fois
   - **Boucle dans boucle !**

2. **Boucles imbriquées** (25 min)
   
   **Programme** :
   ```
   Stylo en position d'écriture
   Répéter [4] fois              ← Boucle externe
       Répéter [4] fois          ← Boucle interne
           Avancer de [50] pas
           Tourner de [90] degrés
       Avancer de [60] pas       ← Se décaler
   ```
   
   **Explication** :
   - Boucle externe : fait 4 fois tout ce qu'il y a dedans
   - Boucle interne : dessine 1 carré
   - Résultat : 4 carrés en ligne

3. **Projet : Rosace** (15 min)
   - Dessiner 12 carrés en cercle
   ```
   Répéter [12] fois
       Répéter [4] fois
           Avancer de [50]
           Tourner de [90]
       Tourner de [30]  ← 360÷12
   ```

4. **Bilan** (5 min)
   - Les boucles permettent de répéter
   - On peut mettre des boucles dans des boucles
   - Très utile pour les figures géométriques

**Évaluation** (séance suivante) :
1. Dessiner un triangle avec une boucle
2. Dessiner 3 cercles à différents endroits (boucle externe)
3. Créer une figure géométrique avec boucle imbriquée

**Prolongement** :
- Découvrir "Répéter jusqu'à" (boucle conditionnelle)
- Projets créatifs : spirales, fractales simples
- Lien avec les maths : périmètres, angles

</details>

---

## 📖 V. Pour aller plus loin

### Ressources complémentaires

**Ouvrages** :
- **"1, 2, 3... codez !"** - Fondation La main à la pâte
- **"Enseigner l'informatique"** - INRIA
- **"Scratch pour les kids"** - The LEAD Project

**Matériel** :
- **Robots** : Bee-Bot, Blue-Bot, Thymio, Lego Mindstorms
- **Cartes** : jeux de programmation débranché
- **Tapis** : quadrillages pour robots

**Sites et plateformes** :
- **Scratch** : scratch.mit.edu (officiel)
- **Code.org** : cours progressifs
- **Blockly Games** : jeux d'initiation
- **LightBot** : jeu de logique/programmation
- **Pixees** : ressources INRIA

**Vidéos** :
- **"C'est quoi un algorithme ?"** - 1 jour 1 question
- **Tutoriels Scratch** - chaînes YouTube pédagogiques
- **"Code décode"** - France TV Éducation

**Concours et défis** :
- **Algoréa** : concours d'algorithmique
- **Castor Informatique** : concours de logique
- **Défi Scratch** : projets collaboratifs

### Fiches connexes

- [Géométrie plane](/maths/geometrie-plane)
- [Repérage](/maths/reperage)
- [Organisation et gestion de données](/maths/organisation-gestion-donnees)

---

<div style={{textAlign: 'center', marginTop: '3rem', padding: '1.5rem', backgroundColor: '#fff9f0', borderRadius: '12px'}}>
  <p style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>
    🦦 <strong>Bon courage Marie !</strong>
  </p>
  <p style={{color: '#666', fontSize: '0.9rem'}}>
    L'algorithmique développe la pensée logique !<br />
    Fais coder, tester, déboguer tes élèves avec plaisir.<br />
    Marque cette fiche comme <strong>maîtrisée</strong> une fois bien révisée.
  </p>
  <p style={{marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 'bold', color: '#2e8555'}}>
    🎉 FÉLICITATIONS ! Toutes les 12 fiches de Mathématiques sont créées ! 🎉
  </p>
</div>
