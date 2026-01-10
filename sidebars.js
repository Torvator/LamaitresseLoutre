/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    
    // ========================================
    // 📝 FRANÇAIS (5 fiches)
    // ========================================
    {
      type: 'category',
      label: '📝 Français',
      collapsed: false,
      items: [
        'francais/grammaire',
        'francais/lecture',
        'francais/culture-litteraire',
        'francais/expression-ecrite',
        'francais/expression-orale',
      ],
    },
    
    // ========================================
    // 🔢 MATHÉMATIQUES (3 fiches pour l'instant, 9 autres à venir)
    // ========================================
    {
      type: 'category',
      label: '🔢 Mathématiques',
      collapsed: false,
      items: [
        'maths/nombres-entiers-decimaux',
        'maths/fractions-nombres-rationnels',
        'maths/nombres-relatifs',
        // TODO: Ajouter les 9 fiches restantes :
        // - puissances-racines-carrees
        // - calcul-litteral
        // - durees-calculs
        // - organisation-gestion-donnees
        // - grandeurs-mesures
        // - geometrie-plane
        // - geometrie-espace
        // - reperage
        // - algorithmique-programmation
      ],
    },
    
    // Les autres matières seront ajoutées au fur et à mesure
    // (pas de catégories vides pour éviter les erreurs de build)
  ],
};

export default sidebars;
