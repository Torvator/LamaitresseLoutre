---
sidebar_position: 1
title: Nombres entiers et décimaux
description: Fiche de révision CRPE - Nombres entiers et décimaux
---

# Nombres entiers et décimaux

:::info Informations
**Matière** : Mathématiques  
**Niveau** : Cycles 2, 3 et 4  
**Durée de révision estimée** : 45 min
:::

---

## 📚 I. Rappel du cours

### A. Nombres entiers

#### 1. Définition et propriétés

**Définition** : Les nombres entiers naturels sont les nombres positifs : 0, 1, 2, 3, 4, 5...

**Écriture des nombres** :
- **Chiffres** : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (10 chiffres)
- **Nombres** : assemblage de chiffres (exemple : 245)
- **Valeur positionnelle** : chaque chiffre a une valeur selon sa position

**Exemple** : Dans 3 456 :
- 3 est le chiffre des milliers → 3 000
- 4 est le chiffre des centaines → 400
- 5 est le chiffre des dizaines → 50
- 6 est le chiffre des unités → 6

**Comparaison des nombres entiers** :
- On compare le nombre de chiffres : 1 234 `<` 12 345
- Si même nombre de chiffres, on compare de gauche à droite : 2 456 `<` 2 789

#### 2. Divisibilité, multiples et diviseurs

**Multiple** : Un nombre est multiple d'un autre si on peut l'obtenir en multipliant par un nombre entier.

**Exemple** : Les multiples de 5 sont : 0, 5, 10, 15, 20, 25, 30...
- 20 est un multiple de 5 car 20 = 5 × 4

**Diviseur** : Un nombre est diviseur d'un autre s'il le divise exactement (reste = 0).

**Exemple** : Les diviseurs de 12 sont : 1, 2, 3, 4, 6, 12
- 3 est un diviseur de 12 car 12 ÷ 3 = 4 (reste 0)
- 5 n'est pas un diviseur de 12 car 12 ÷ 5 = 2 reste 2

**Vocabulaire important** :
- Si a × b = c, alors c est un **multiple** de a et de b
- Si a × b = c, alors a et b sont des **diviseurs** de c

#### 3. Critères de divisibilité

Ces critères permettent de savoir rapidement si un nombre est divisible sans faire la division.

| Divisible par | Critère | Exemple |
|---------------|---------|---------|
| **2** | Le nombre se termine par 0, 2, 4, 6 ou 8 | 234 (se termine par 4) ✓ |
| **3** | La somme de ses chiffres est divisible par 3 | 234 → 2+3+4=9, et 9÷3=3 ✓ |
| **4** | Les deux derniers chiffres forment un nombre divisible par 4 | 316 → 16÷4=4 ✓ |
| **5** | Le nombre se termine par 0 ou 5 | 235 (se termine par 5) ✓ |
| **9** | La somme de ses chiffres est divisible par 9 | 234 → 2+3+4=9, et 9÷9=1 ✓ |
| **10** | Le nombre se termine par 0 | 230 (se termine par 0) ✓ |

**Astuce pédagogique** : Faire mémoriser aux élèves : "2, 5 et 10 regardent la fin / 3 et 9 additionnent / 4 regarde les deux derniers"

#### 4. Nombres premiers

**Définition** : Un nombre premier est un nombre entier supérieur à 1 qui n'a que deux diviseurs : 1 et lui-même.

**Liste des nombres premiers jusqu'à 100** :
2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

**Remarques importantes** :
- **1 n'est pas un nombre premier** (il n'a qu'un seul diviseur)
- **2 est le seul nombre premier pair** (tous les autres pairs sont divisibles par 2)

**Méthode pour vérifier si un nombre est premier** :
1. Vérifier s'il est divisible par 2, 3, 5, 7...
2. S'arrêter quand on atteint la racine carrée du nombre
3. S'il n'est divisible par aucun nombre testé → il est premier

**Exemple** : 29 est-il premier ?
- Racine carrée de 29 ≈ 5,4
- On teste : 2, 3, 5
- 29 ÷ 2 = 14,5 ✗ / 29 ÷ 3 = 9,66... ✗ / 29 ÷ 5 = 5,8 ✗
- **29 est premier** ✓

#### 5. Décomposition en facteurs premiers

**Principe** : Tout nombre entier peut s'écrire comme un produit de nombres premiers.

**Méthode** : Division successive par les nombres premiers (2, 3, 5, 7, 11...)

**Exemple** : Décomposer 60
```
60 │ 2
30 │ 2
15 │ 3
 5 │ 5
 1 │
```
Donc : **60 = 2 × 2 × 3 × 5 = 2² × 3 × 5**

**Exemple 2** : Décomposer 126
```
126 │ 2
 63 │ 3
 21 │ 3
  7 │ 7
  1 │
```
Donc : **126 = 2 × 3 × 3 × 7 = 2 × 3² × 7**

#### 6. PGCD et PPCM

**PGCD (Plus Grand Commun Diviseur)** : Le plus grand nombre qui divise à la fois deux nombres.

**Méthode 1 - Liste des diviseurs** :
- Diviseurs de 12 : 1, 2, 3, 4, 6, **12**
- Diviseurs de 18 : 1, 2, 3, 6, 9, **18**
- Diviseurs communs : 1, 2, 3, **6**
- PGCD(12, 18) = **6**

**Méthode 2 - Décomposition en facteurs premiers** :
- 12 = 2² × 3
- 18 = 2 × 3²
- PGCD = produit des facteurs communs avec les plus petits exposants
- PGCD(12, 18) = 2¹ × 3¹ = **6**

**Méthode 3 - Algorithme d'Euclide** (la plus rapide) :
```
PGCD(18, 12) :
18 = 12 × 1 + 6
12 = 6 × 2 + 0
Donc PGCD(18, 12) = 6
```

**PPCM (Plus Petit Commun Multiple)** : Le plus petit nombre (différent de 0) qui est multiple de deux nombres.

**Méthode 1 - Liste des multiples** :
- Multiples de 4 : 4, 8, **12**, 16, 20, **24**, 28...
- Multiples de 6 : 6, **12**, 18, **24**, 30...
- Plus petit multiple commun : **12**
- PPCM(4, 6) = **12**

**Méthode 2 - Décomposition en facteurs premiers** :
- 12 = 2² × 3
- 18 = 2 × 3²
- PPCM = produit de tous les facteurs avec les plus grands exposants
- PPCM(12, 18) = 2² × 3² = 4 × 9 = **36**

**Formule utile** : PGCD(a, b) × PPCM(a, b) = a × b

### B. Nombres décimaux

#### 1. Définition et écriture

**Définition** : Un nombre décimal est un nombre qui peut s'écrire avec une virgule.

**Structure d'un nombre décimal** :

```
   2    3    4   ,   5    6    7
   ↓    ↓    ↓        ↓    ↓    ↓
 cent. diz. unités  dixièmes centièmes millièmes
```

**Vocabulaire** :
- **Partie entière** : avant la virgule (234)
- **Partie décimale** : après la virgule (567)

**Écriture fractionnaire** :
- 0,5 = 5/10 (cinq dixièmes)
- 0,25 = 25/100 (vingt-cinq centièmes)
- 0,125 = 125/1000 (cent vingt-cinq millièmes)

**Remarque importante** : Tout nombre décimal peut s'écrire sous forme de fraction ayant un dénominateur qui est une puissance de 10 (10, 100, 1000...).

#### 2. Comparaison des nombres décimaux

**Méthode** :
1. Comparer les parties entières
2. Si égales, comparer les chiffres des dixièmes
3. Si égaux, comparer les chiffres des centièmes
4. Et ainsi de suite...

**Exemples** :
- 3,45 `<` 4,2 (car 3 `<` 4)
- 2,7 `>` 2,68 (car 7 dixièmes > 6 dixièmes)
- 5,234 `<` 5,24 (car 3 centièmes < 4 centièmes)

**Piège fréquent** : Les élèves pensent que 3,9 `<` 3,15 car "15 `>` 9"
→ Il faut toujours comparer position par position !

#### 3. Opérations sur les nombres décimaux

**Addition et soustraction** :
- Aligner les virgules
- Compléter avec des zéros si besoin
- Calculer comme avec des entiers

**Exemple** :
```
   23,5
 +  4,27
 -------
   27,77
```

**Multiplication** :
- Calculer sans tenir compte des virgules
- Compter le nombre total de chiffres après les virgules
- Placer la virgule dans le résultat

**Exemple** : 2,5 × 3,2
- 25 × 32 = 800
- 1 chiffre après la virgule (2,5) + 1 chiffre (3,2) = 2 chiffres
- Résultat : **8,00 = 8**

**Division** :
- Si on divise par un nombre entier : placer la virgule au quotient quand on "abaisse" le chiffre des dixièmes
- Si on divise par un nombre décimal : multiplier dividende et diviseur par 10, 100... pour avoir un diviseur entier

**Exemple** : 12,6 ÷ 3
```
12,6 │ 3
 12  │ 4,2
  06
   6
   0
```

#### 4. Ordre de grandeur

**Définition** : Un ordre de grandeur est une valeur approchée permettant d'estimer un résultat.

**Méthode** : Arrondir les nombres avant de calculer.

**Exemples** :
- 19,8 × 4,1 ≈ 20 × 4 = **80** (ordre de grandeur)
- 498 ÷ 9,7 ≈ 500 ÷ 10 = **50** (ordre de grandeur)

**Utilité pédagogique** :
- Vérifier la cohérence d'un résultat
- Estimer rapidement un calcul
- Détecter les erreurs de virgule

### C. Puissances de 10 et notation scientifique

#### 1. Puissances de 10

**Exposant positif** :
- 10¹ = 10
- 10² = 10 × 10 = 100
- 10³ = 10 × 10 × 10 = 1 000
- 10⁴ = 10 000
- 10ⁿ = 1 suivi de n zéros

**Exposant négatif** :
- 10⁻¹ = 0,1 (1/10)
- 10⁻² = 0,01 (1/100)
- 10⁻³ = 0,001 (1/1000)
- 10⁻ⁿ = 0,00...01 (n zéros après la virgule)

**Propriétés** :
- 10ᵃ × 10ᵇ = 10⁽ᵃ⁺ᵇ⁾
- 10ᵃ ÷ 10ᵇ = 10⁽ᵃ⁻ᵇ⁾
- (10ᵃ)ᵇ = 10⁽ᵃˣᵇ⁾
- 10⁰ = 1

**Exemples** :
- 10³ × 10² = 10⁵ = 100 000
- 10⁶ ÷ 10² = 10⁴ = 10 000
- (10²)³ = 10⁶ = 1 000 000

#### 2. Multiplier et diviser par des puissances de 10

**Multiplier** : déplacer la virgule vers la droite
- 3,45 × 10 = 34,5
- 3,45 × 100 = 345
- 3,45 × 1000 = 3 450

**Diviser** : déplacer la virgule vers la gauche
- 3,45 ÷ 10 = 0,345
- 3,45 ÷ 100 = 0,0345
- 3,45 ÷ 1000 = 0,00345

**Règle mnémotechnique** : "Multiplier par 10ⁿ = déplacer la virgule de n rangs vers la droite"

#### 3. Notation scientifique

**Définition** : Écriture d'un nombre sous la forme : **a × 10ⁿ** où 1 ≤ a < 10 et n est un entier relatif.

**Méthode** :
1. Placer la virgule après le premier chiffre non nul
2. Compter le nombre de rangs de déplacement
3. Si déplacement vers la gauche → exposant positif
4. Si déplacement vers la droite → exposant négatif

**Exemples** :
- 3 450 = 3,45 × 10³ (virgule déplacée de 3 rangs vers la gauche)
- 0,00234 = 2,34 × 10⁻³ (virgule déplacée de 3 rangs vers la droite)
- 123 000 000 = 1,23 × 10⁸

**Utilité** :
- Écrire de très grands nombres (distance Terre-Soleil : 1,5 × 10⁸ km)
- Écrire de très petits nombres (taille d'un atome : 1 × 10⁻¹⁰ m)

---

## 🎯 II. Mise en pratique - Exercices

:::tip Objectif pédagogique
Maîtriser les notions fondamentales sur les nombres entiers et décimaux à travers des exercices progressifs.
:::

### Exercice 1 : Divisibilité et critères

**Niveau** : CM2 / 6ᵉ

Sans faire la division, dire si les nombres suivants sont divisibles par 2, 3, 5, 9 :
1. 345
2. 720
3. 1 458

**Correction** :

1. **345** :
   - Par 2 ? Non (se termine par 5)
   - Par 3 ? Oui (3+4+5 = 12, divisible par 3)
   - Par 5 ? Oui (se termine par 5)
   - Par 9 ? Non (3+4+5 = 12, non divisible par 9)

2. **720** :
   - Par 2 ? Oui (se termine par 0)
   - Par 3 ? Oui (7+2+0 = 9, divisible par 3)
   - Par 5 ? Oui (se termine par 0)
   - Par 9 ? Oui (7+2+0 = 9, divisible par 9)

3. **1 458** :
   - Par 2 ? Oui (se termine par 8)
   - Par 3 ? Oui (1+4+5+8 = 18, divisible par 3)
   - Par 5 ? Non (ne se termine pas par 0 ou 5)
   - Par 9 ? Oui (1+4+5+8 = 18, divisible par 9)

### Exercice 2 : Décomposition en facteurs premiers

**Niveau** : 5ᵉ / 4ᵉ

Décomposer en produit de facteurs premiers :
1. 72
2. 90

**Correction** :

1. **72** :
```
72 │ 2
36 │ 2
18 │ 2
 9 │ 3
 3 │ 3
 1 │
```
**72 = 2³ × 3²**

2. **90** :
```
90 │ 2
45 │ 3
15 │ 3
 5 │ 5
 1 │
```
**90 = 2 × 3² × 5**

### Exercice 3 : PGCD et PPCM

**Niveau** : 3ᵉ

Calculer le PGCD et le PPCM de 48 et 72 par la méthode de la décomposition en facteurs premiers.

**Correction** :

**Décomposition** :
- 48 = 2⁴ × 3
- 72 = 2³ × 3²

**PGCD** = produit des facteurs communs avec les plus petits exposants
- PGCD(48, 72) = 2³ × 3¹ = **8 × 3 = 24**

**PPCM** = produit de tous les facteurs avec les plus grands exposants
- PPCM(48, 72) = 2⁴ × 3² = **16 × 9 = 144**

**Vérification** : 24 × 144 = 3 456 et 48 × 72 = 3 456 ✓

### Exercice 4 : Opérations sur les décimaux

**Niveau** : CM1 / CM2

Calculer :
1. 23,45 + 7,8
2. 12,6 - 5,47
3. 3,2 × 2,5
4. 15,6 ÷ 4

**Correction** :

1. **23,45 + 7,8** :
```
  23,45
+  7,80
-------
  31,25
```

2. **12,6 - 5,47** :
```
  12,60
-  5,47
-------
   7,13
```

3. **3,2 × 2,5** :
- 32 × 25 = 800
- 2 chiffres après les virgules → **8,00 = 8**

4. **15,6 ÷ 4** :
```
15,6 │ 4
 15  │ 3,9
  16
  16
   0
```
**Résultat : 3,9**

### Exercice 5 : Notation scientifique

**Niveau** : 4ᵉ / 3ᵉ

Écrire en notation scientifique :
1. 45 000
2. 0,00123
3. 789 000 000

**Correction** :

1. **45 000** = 4,5 × 10⁴
2. **0,00123** = 1,23 × 10⁻³
3. **789 000 000** = 7,89 × 10⁸

---

## 👩‍🏫 III. Pédagogie et didactique

### A. Progression par cycles

**Cycle 2 (CP-CE2)** :
- **CP** : Nombres jusqu'à 100, décomposition additive (23 = 20 + 3)
- **CE1** : Nombres jusqu'à 1 000, introduction des dizaines et centaines
- **CE2** : Nombres jusqu'à 10 000, premières approches de la multiplication

**Cycle 3 (CM1-6ᵉ)** :
- **CM1** : Grands nombres (millions), nombres décimaux (dixièmes, centièmes)
- **CM2** : Milliards, fractions décimales, multiples et diviseurs
- **6ᵉ** : Divisibilité, nombres premiers, décomposition, PGCD et PPCM (initiation)

**Cycle 4 (5ᵉ-3ᵉ)** :
- **5ᵉ** : Nombres relatifs, PGCD et PPCM approfondis, notation scientifique
- **4ᵉ** : Puissances, calcul littéral, équations
- **3ᵉ** : Racines carrées, développement, factorisation

### B. Difficultés fréquentes des élèves

**Sur les nombres entiers** :
- Confusion entre chiffre et nombre
- Difficulté à comparer des nombres de longueurs différentes
- Erreurs dans la lecture des grands nombres
- Confusion entre multiple et diviseur

**Sur les nombres décimaux** :
- Penser que 3,9 `<` 3,15 car "15 `>` 9"
- Oublier d'aligner les virgules dans les additions/soustractions
- Placer la virgule au mauvais endroit dans les multiplications
- Confusion entre 0,5 et 0,50 (équivalence)

**Sur les puissances de 10** :
- Erreurs dans le sens de déplacement de la virgule
- Confusion entre multiplication et division
- Oubli du signe de l'exposant

### C. Activités pédagogiques recommandées

**Manipulation et jeux** :
- **Jeu du nombre mystère** : deviner un nombre par questions (divisible par... ? plus grand que... ?)
- **Bataille de nombres décimaux** : comparer des cartes avec des nombres décimaux
- **Tableau de numération** : placer des jetons pour représenter des nombres

**Rituels quotidiens** :
- **Nombre du jour** : décomposer un nombre (additif, multiplicatif, en facteurs premiers)
- **Calcul mental** : séances courtes (5-10 min) chaque jour
- **Ordre de grandeur** : estimer le résultat avant de calculer

**Projets et situations-problèmes** :
- **Budget de classe** : gérer de l'argent fictif (décimaux)
- **Échelles** : plan de la classe, de l'école (proportionnalité)
- **Mesures réelles** : mesurer des objets, comparer, convertir

**Différenciation** :
- Élèves en difficulté : manipulations concrètes, nombres plus petits
- Élèves avancés : défis mathématiques, nombres plus grands, démonstrations

### D. Erreurs à éviter en tant qu'enseignant

**Erreurs conceptuelles** :
- Dire que "0,5 c'est comme une demi" sans expliquer pourquoi
- Présenter les critères de divisibilité sans justification
- Confondre "notation scientifique" et "écriture avec puissances de 10"

**Erreurs pédagogiques** :
- Aller trop vite sur les nombres décimaux (notion complexe)
- Ne pas varier les représentations (écriture fractionnaire, décimale, droite graduée)
- Ne pas faire suffisamment de liens entre les notions

**Conseils** :
- Toujours partir du concret vers l'abstrait
- Multiplier les exemples et contre-exemples
- Faire verbaliser les élèves sur leurs stratégies

---

## 🎓 IV. Pour le jour du concours

**Cette notion peut tomber** :
- ✅ À l'écrit : Exercices de calcul, problèmes, questions sur les propriétés des nombres
- ✅ À l'oral : Leçon sur les nombres, analyse d'erreur d'élève, séquence pédagogique

**Points de vigilance** :
- Maîtriser PARFAITEMENT les **critères de divisibilité** (question très fréquente)
- Savoir décomposer rapidement en **facteurs premiers** (méthode à connaître sur le bout des doigts)
- Ne pas confondre **multiple et diviseur** (erreur classique même chez les candidats)
- Connaître les **méthodes de calcul du PGCD** (liste, décomposition, Euclide)
- Maîtriser les **opérations sur les décimaux** sans calculatrice
- Savoir placer la virgule dans les **multiplications et divisions**
- Connaître la **progression Cycle 2 → Cycle 3** (quand introduire les nombres premiers ? les décimaux ?)

**Attendus du jury** :
- Maîtrise disciplinaire irréprochable (aucune erreur de calcul, de propriété)
- Connaissance précise des **programmes** et des **attendus par cycle**
- Capacité à **expliquer simplement** avec des exemples concrets et visuels
- Proposition d'une **progression cohérente** (ne pas brûler les étapes)
- Connaissance des **erreurs fréquentes** des élèves et des remédiations efficaces
- Activités **manipulatoires et concrètes** avant l'abstraction (jetons, bûchettes, matériel de numération)
- Utilisation de situations-problèmes **ancrées dans le réel**

**Erreurs à éviter le jour J** :
- Confondre soi-même multiple et diviseur dans l'explication
- Oublier que **1 n'est pas premier** (piège classique)
- Se tromper dans les **critères de divisibilité** (notamment par 4 et 9)
- Mal placer la virgule dans une multiplication ou division
- Proposer une séquence trop abstraite sans manipulation
- Oublier le lien avec les **situations concrètes** (argent, mesures, partages)
- Ne pas connaître la progression (introduire les décimaux trop tôt)
- Confondre notation scientifique et simple écriture avec puissances de 10

**Conseils pour l'oral** :
- Toujours partir d'une **situation concrète** : partage équitable (diviseurs), rangement par paquets (multiples)
- Utiliser le **matériel de numération** : cubes unités, barres de dizaines, plaques de centaines
- Proposer des **jeux** : bataille de nombres, nombre mystère, loto des multiples
- Faire **manipuler** avant de formaliser : groupements, échanges, décompositions
- Prévoir des **différenciations** : nombres plus petits pour les élèves en difficulté

**Questions pièges du jury** :
- "Pourquoi 1 n'est-il pas un nombre premier ?" → Car il n'a qu'un seul diviseur (lui-même)
- "Comment expliquer à un CM1 que 0,5 = 0,50 ?" → Même valeur, comme 5 dixièmes = 50 centièmes
- "À quel cycle introduit-on les nombres décimaux ?" → Cycle 3 (CM1), mais initiation possible fin CE2
- "Comment aider un élève qui pense que 3,9 `<` 3,15 ?" → Comparer position par position avec tableau de numération
- "Quelle est la différence entre PGCD et PPCM ?" → PGCD = division / PPCM = multiplication (contextes différents)

### Questions types CRPE

**Question 1** : Expliquez la différence entre multiple et diviseur. Donnez un exemple concret adapté à des élèves de CM2.

<details>
<summary>Voir la réponse</summary>

**Explication théorique** :

Un **multiple** d'un nombre est le résultat de la multiplication de ce nombre par un entier.
- Les multiples de 5 sont : 0, 5, 10, 15, 20, 25, 30...
- On obtient les multiples en **multipliant** : 5 × 0 = 0, 5 × 1 = 5, 5 × 2 = 10...

Un **diviseur** d'un nombre est un nombre qui divise exactement ce nombre (reste = 0).
- Les diviseurs de 12 sont : 1, 2, 3, 4, 6, 12
- Ce sont les nombres qui **divisent** 12 sans reste

**Relation** :
- Si a × b = c, alors c est un **multiple** de a et de b
- Si a × b = c, alors a et b sont des **diviseurs** de c

**Exemple concret pour CM2** :

*"Imaginez que vous rangez 24 bonbons dans des boîtes."*

**Pour les multiples** :
- "Si je mets 3 bonbons par boîte, je peux faire 8 boîtes : 3 × 8 = 24"
- "24 est un **multiple** de 3 (et aussi un multiple de 8)"
- "Je peux continuer : 3 × 9 = 27, 3 × 10 = 30... → 27 et 30 sont aussi des multiples de 3"

**Pour les diviseurs** :
- "Quelles sont toutes les façons de ranger 24 bonbons en parts égales ?"
- 1 boîte de 24 / 2 boîtes de 12 / 3 boîtes de 8 / 4 boîtes de 6 / 6 boîtes de 4 / 8 boîtes de 3 / 12 boîtes de 2 / 24 boîtes de 1
- "Les nombres 1, 2, 3, 4, 6, 8, 12, 24 sont les **diviseurs** de 24"

**Astuce mnémotechnique** :
- **Multiple** → on **M**ultiplie → nombres **plus grands** (liste infinie : 5, 10, 15, 20...)
- **Diviseur** → on **D**ivise → nombres **plus petits** (liste finie : 1, 2, 3, 4, 6, 12)

</details>

**Question 2** : Un élève de 5ᵉ affirme que 48 et 36 ont pour PGCD 12 et pour PPCM 144. Comment vérifiez-vous rapidement cette réponse ? Si elle est correcte, validez-la. Sinon, expliquez l'erreur.

<details>
<summary>Voir la réponse</summary>

**Vérification 1 - Formule PGCD × PPCM = a × b** :

Cette propriété permet une vérification rapide :
- PGCD(48, 36) × PPCM(48, 36) = 48 × 36
- 12 × 144 = 1 728
- 48 × 36 = 1 728 ✓

La formule est vérifiée, c'est bon signe !

**Vérification 2 - Le PGCD divise-t-il bien les deux nombres ?**

- 48 ÷ 12 = 4 ✓
- 36 ÷ 12 = 3 ✓

Oui, 12 divise bien 48 et 36.

**Vérification 3 - 12 est-il le PLUS GRAND diviseur commun ?**

Pour s'en assurer, décomposons en facteurs premiers :
- 48 = 2⁴ × 3
- 36 = 2² × 3²
- PGCD = 2² × 3 = 4 × 3 = **12** ✓

**Vérification 4 - Le PPCM est-il multiple des deux nombres ?**

- 144 ÷ 48 = 3 ✓
- 144 ÷ 36 = 4 ✓

**Vérification 5 - 144 est-il le PLUS PETIT multiple commun ?**

- PPCM = 2⁴ × 3² = 16 × 9 = **144** ✓

**Conclusion** : L'élève a raison ! PGCD(48, 36) = 12 et PPCM(48, 36) = 144.

**Validation pédagogique** :
"Bravo ! Tu as tout juste. Tu as bien appliqué la méthode de décomposition en facteurs premiers :
- Pour le PGCD : facteurs communs avec les plus petits exposants → 2² × 3 = 12
- Pour le PPCM : tous les facteurs avec les plus grands exposants → 2⁴ × 3² = 144"

</details>

**Question 3** : Un élève de CM1 écrit : 3,45 + 2,8 = 5,53. Analysez cette erreur et proposez une remédiation.

<details>
<summary>Voir la réponse</summary>

**Analyse de l'erreur** :

L'élève a écrit : 3,45 + 2,8 = **5,53** au lieu de **6,25**.

**Calcul erroné de l'élève** :
```
  3,45
+ 2,8
------
  5,53
```

**Origine de l'erreur** :
L'élève n'a **pas aligné les virgules**. Il a probablement calculé :
```
  345
+  28
-----
  373 → puis placé la virgule n'importe où
```

Ou il a fait :
```
  3,45
+ 2, 8   (en décalant le 8)
------
  5,53
```

**Type d'erreur** : 
- Méconnaissance de la procédure d'addition de nombres décimaux
- Non-alignement des virgules
- Confusion entre parties entière et décimale

**Remédiation proposée** :

**Phase 1 - Faire prendre conscience de l'erreur** (5 min)
- "Vérifions ensemble avec du matériel"
- Utiliser des **jetons** : 3 jetons rouges (unités) + 4 jetons bleus (dixièmes) + 5 jetons verts (centièmes)
- Ajouter : 2 jetons rouges + 8 jetons bleus
- Compter : 5 rouges + 12 bleus + 5 verts = 5 unités + 1 unité (10 dixièmes) + 2 dixièmes + 5 centièmes = 6,25

**Phase 2 - Rappel de la règle** (10 min)
- "Pour additionner des nombres décimaux, il faut **aligner les virgules**"
- Montrer au tableau :
```
  3,45
+ 2,80  ← On ajoute un 0 pour avoir le même nombre de chiffres
------
  6,25
```

**Phase 3 - Tableau de numération** (15 min)
- Faire refaire l'addition dans un tableau :

| Unités | , | Dixièmes | Centièmes |
|--------|---|----------|-----------|
| 3 | , | 4 | 5 |
| 2 | , | 8 | 0 |
| **6** | , | **2** | **5** |

- "Les chiffres des unités avec les unités, des dixièmes avec les dixièmes..."

**Phase 4 - Entraînement progressif** (20 min)
1. Additions simples : 2,3 + 1,5 / 4,6 + 2,1
2. Nombres de longueurs différentes : 5,7 + 3,24 / 12,5 + 4,38
3. Retenues : 3,8 + 2,7 / 6,75 + 4,68

**Affichage de référence** :
```
ADDITION DE DÉCIMAUX
1. J'aligne les virgules
2. Je complète avec des 0 si besoin
3. J'additionne comme des entiers
4. Je place la virgule au résultat

  3,45
+ 2,80
------
  6,25
```

**Astuce mnémotechnique** :
"La virgule, c'est comme une colonne : tout doit être bien aligné !"

**Exercices de consolidation** :
- Corriger des additions mal posées
- Poser et calculer 10 additions de décimaux
- Estimer l'ordre de grandeur avant de calculer (3,45 + 2,8 ≈ 3 + 3 = 6)

</details>

**Question 4** : Proposez une séquence de découverte des nombres premiers pour des élèves de CM2 (3 séances).

<details>
<summary>Voir la réponse</summary>

**Séquence : Découvrir les nombres premiers**  
**Niveau** : CM2  
**Durée** : 3 séances de 45-60 minutes

---

**SÉANCE 1 - Découverte : Le jeu des diviseurs (60 min)**

**Objectif** : Découvrir qu'il existe des nombres qui n'ont que deux diviseurs

**Matériel** : Cubes, jetons, tableau à double entrée

**Déroulement** :

1. **Situation de recherche** (20 min)
   - "Vous avez 12 cubes. Trouvez toutes les façons de les ranger en rectangles."
   - Recherche par binômes avec manipulation
   - Solutions : 1×12, 2×6, 3×4 (+ les symétriques)
   - "Quels sont tous les diviseurs de 12 ?" → 1, 2, 3, 4, 6, 12

2. **Défi** (25 min)
   - "Même exercice avec les nombres de 2 à 20"
   - Remplir un tableau :

| Nombre | Diviseurs | Nombre de diviseurs |
|--------|-----------|---------------------|
| 2 | 1, 2 | 2 |
| 3 | 1, 3 | 2 |
| 4 | 1, 2, 4 | 3 |
| 5 | 1, 5 | 2 |
| 6 | 1, 2, 3, 6 | 4 |
| ... | ... | ... |

3. **Observation** (15 min)
   - "Quels nombres n'ont que 2 diviseurs ?" → 2, 3, 5, 7, 11, 13, 17, 19
   - "Que remarquez-vous ?" → Toujours 1 et le nombre lui-même
   - Institutionnalisation : "Ces nombres s'appellent des **nombres premiers**"

---

**SÉANCE 2 - Approfondissement : Le crible d'Ératosthène (45 min)**

**Objectif** : Identifier tous les nombres premiers jusqu'à 100

**Matériel** : Grille de nombres de 1 à 100, crayons de couleur

**Déroulement** :

1. **Rappel** (5 min)
   - "Qu'est-ce qu'un nombre premier ?"
   - Lister ceux trouvés la séance précédente

2. **Méthode du crible** (30 min)
   - Distribuer la grille 1-100
   - Étapes :
     1. Barrer 1 (n'est pas premier)
     2. Entourer 2 en bleu → barrer tous ses multiples (4, 6, 8...)
     3. Entourer 3 en rouge → barrer tous ses multiples non barrés (9, 15, 21...)
     4. Entourer 5 en vert → barrer ses multiples (25, 35, 55...)
     5. Continuer avec 7, 11...

3. **Bilan** (10 min)
   - Compter les nombres premiers jusqu'à 100 : il y en a 25 !
   - Observer : 2 est le seul premier pair
   - Afficher la liste : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...

---

**SÉANCE 3 - Réinvestissement : Décomposition en facteurs premiers (60 min)**

**Objectif** : Décomposer un nombre en produit de facteurs premiers

**Matériel** : Ardoises, feuilles de recherche

**Déroulement** :

1. **Situation problème** (15 min)
   - "36 bonbons à partager. Trouvez toutes les façons de faire des paquets égaux."
   - 2 paquets de 18 / 3 paquets de 12 / 4 paquets de 9 / 6 paquets de 6...
   - Représenter par un arbre :
     ```
     36 = 2 × 18 = 2 × 2 × 9 = 2 × 2 × 3 × 3 = 2² × 3²
     ```

2. **Méthode de décomposition** (20 min)
   - Présenter la division successive :
     ```
     36 │ 2
     18 │ 2
      9 │ 3
      3 │ 3
      1 │
     ```
   - Donc 36 = 2 × 2 × 3 × 3 = 2² × 3²

3. **Entraînement** (20 min)
   - Décomposer : 24, 30, 48, 60, 100
   - Par binômes, avec vérification collective

4. **Trace écrite** (5 min)
   - Définition des nombres premiers
   - Méthode de décomposition
   - Exemples

**Évaluation** :
- Séance suivante : 
  1. Identifier si un nombre est premier (jusqu'à 50)
  2. Décomposer 3 nombres en facteurs premiers
  3. Résoudre un problème utilisant les diviseurs

</details>

**Question 5** : Comment expliquez-vous à un élève de 6ᵉ la notation scientifique et son utilité ? Donnez un exemple concret.

<details>
<summary>Voir la réponse</summary>

**Explication pour l'élève** :

**1. Le problème** :

"En sciences, on rencontre parfois des nombres **très grands** ou **très petits** qui sont difficiles à écrire et à lire."

**Exemples** :
- Distance Terre-Soleil : 150 000 000 000 mètres (beaucoup de zéros !)
- Taille d'un virus : 0,000 000 1 mètre (beaucoup de zéros aussi !)

**2. La solution : la notation scientifique**

"La notation scientifique permet d'écrire ces nombres de façon **simple et lisible**."

**Principe** : On écrit le nombre sous la forme **a × 10ⁿ** où :
- **a** est un nombre compris entre 1 et 10 (exclu) : 1 ≤ a < 10
- **n** est un entier relatif (positif ou négatif)

**3. Comment faire ?**

**Étape 1** : Placer la virgule après le premier chiffre non nul
- 150 000 000 000 → **1**,5 (virgule après le 1)

**Étape 2** : Compter le nombre de rangs de déplacement
- De 1,5 à 150 000 000 000, la virgule a bougé de **11 rangs vers la droite**

**Étape 3** : Écrire avec une puissance de 10
- 150 000 000 000 = **1,5 × 10¹¹**

**Exemples détaillés** :

| Nombre ordinaire | Notation scientifique | Explication |
|------------------|----------------------|-------------|
| 3 450 | 3,45 × 10³ | Virgule déplacée de 3 rangs vers la gauche |
| 0,00234 | 2,34 × 10⁻³ | Virgule déplacée de 3 rangs vers la droite |
| 6 700 000 | 6,7 × 10⁶ | Virgule déplacée de 6 rangs vers la gauche |

**4. Exemple concret et parlant** :

**L'atome** :
- Un atome mesure environ **0,000 000 000 1 mètre** (10 zéros !)
- En notation scientifique : **1 × 10⁻¹⁰ mètre**
- "Regarde comme c'est plus simple à écrire et à lire !"

**Le système solaire** :
- Distance Terre-Lune : environ 384 000 000 mètres
- En notation scientifique : **3,84 × 10⁸ mètres**

**5. L'utilité concrète**

"La notation scientifique est utilisée :**
- En **astronomie** : distances entre planètes, taille de l'univers
- En **physique** : vitesse de la lumière (3 × 10⁸ m/s)
- En **biologie** : taille des cellules, des bactéries
- En **chimie** : nombre d'atomes dans une mole (6,02 × 10²³)

**6. Astuce pour reconnaître le signe de l'exposant**

- **Grand nombre** (≥ 10) → exposant **positif** (virgule va vers la gauche)
  - 5 000 = 5 × 10³
- **Petit nombre** (< 1) → exposant **négatif** (virgule va vers la droite)
  - 0,005 = 5 × 10⁻³

**Exercice d'application** :

"À toi ! Écris en notation scientifique :
1. La population mondiale : 8 000 000 000 personnes → **8 × 10⁹**
2. L'épaisseur d'un cheveu : 0,00007 mètre → **7 × 10⁻⁵ m**"

</details>

---

## ✅ Points clés

:::note Récapitulatif
- **Nombres entiers** : divisibilité, multiples, diviseurs, critères
- **Nombres premiers** : divisibles uniquement par 1 et eux-mêmes
- **Décomposition** : produit de facteurs premiers
- **PGCD** : plus grand commun diviseur (facteurs communs, plus petits exposants)
- **PPCM** : plus petit commun multiple (tous les facteurs, plus grands exposants)
- **Nombres décimaux** : partie entière + partie décimale
- **Comparaison** : position par position (de gauche à droite)
- **Puissances de 10** : déplacer la virgule (× → droite, ÷ → gauche)
- **Notation scientifique** : a × 10ⁿ avec 1 ≤ a < 10
:::

:::warning Points de vigilance
- Ne pas confondre chiffre et nombre
- Bien aligner les virgules dans les opérations
- Appliquer correctement les critères de divisibilité
- Vérifier le sens de déplacement de la virgule avec les puissances de 10
:::

---

## 📖 V. Pour aller plus loin

### Ressources complémentaires

**Ouvrages de référence** :
- **"Enseigner les mathématiques au primaire"** - Bulletin officiel / Eduscol
- **"Cap Maths"** - Hatier (méthode complète du CP au CM2)
- **"MHM - Méthode Heuristique de Mathématiques"** - Nicolas Pinel (approche par manipulation)
- **"Ermel"** - Hatier (situations de recherche)
- **"Pour comprendre les mathématiques"** - Hachette (manuel progressif)
- **"Mathématiques - Enseigner autrement"** - Retz

**Jeux et matériel pédagogique** :
- **Multimalin** : tables de multiplication en images mentales
- **Cartes à jouer** : pour travailler les nombres et le calcul mental
- **Matériel de numération** : cubes, barres, plaques (base 10)
- **Réglettes Cuisenaire** : pour visualiser les nombres et opérations
- **Abaque** : manipulation de la numération de position

**Vidéos pédagogiques** :
- **Canopé** : série "Les Fondamentaux" - Nombres et calculs
- **Lumni** : cours de mathématiques CM1, CM2, 6e
- **YouTube** : chaîne "Maître Lucas" (leçons animées)
- **M@ths en-vie** : situations problèmes ancrées dans le réel

**Sites web utiles** :
- **Eduscol** : ressources d'accompagnement (eduscol.education.fr)
- **Mathématiques magiques** : curiosités et jeux (therese.eveilleau.pagesperso-orange.fr)
- **Primaths** : exercices progressifs en ligne (primaths.fr)
- **Calculatice** : calcul mental (calculatice.ac-lille.fr)
- **La classe de Mallory** : leçons et jeux (mallotine.eklablog.com)

### Fiches connexes

- [Fractions et nombres rationnels](/fiches/maths/fractions)
- [Nombres relatifs](/fiches/maths/relatifs)
- [Calcul littéral](/fiches/maths/calcul-litteral)
- [Proportionnalité](/fiches/maths/proportionnalite)

---

<div style={{textAlign: 'center', marginTop: '3rem', padding: '1.5rem', backgroundColor: '#fff9f0', borderRadius: '12px'}}>
  <p style={{fontSize: '1.2rem', marginBottom: '0.5rem'}}>
    🦦 <strong>Bon courage Marie !</strong>
  </p>
  <p style={{color: '#666', fontSize: '0.9rem'}}>
    Les nombres sont le fondement de toutes les mathématiques !<br />
    Maîtrise-les et tu maîtriseras tout le reste.<br />
    Marque cette fiche comme <strong>maîtrisée</strong> une fois bien révisée.
  </p>
</div>
