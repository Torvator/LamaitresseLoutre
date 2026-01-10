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
    // 🔢 MATHÉMATIQUES (12 fiches)
    // ========================================
    {
      type: 'category',
      label: '🔢 Mathématiques',
      collapsed: false,
      items: [
        // I. Nombres et Calculs (6 fiches)
        {
          type: 'category',
          label: 'I. Nombres et Calculs',
          collapsed: false,
          items: [
            'maths/nombres-entiers-decimaux',
            'maths/fractions-nombres-rationnels',
            'maths/nombres-relatifs',
            'maths/puissances-racines-carrees',
            'maths/calcul-litteral',
            'maths/durees-calculs',
          ],
        },
        // II. Organisation et Gestion de Données (1 fiche)
        'maths/organisation-gestion-donnees',
        // III. Grandeurs et Mesures (1 fiche)
        'maths/grandeurs-mesures',
        // IV. Géométrie (3 fiches)
        {
          type: 'category',
          label: 'IV. Géométrie',
          collapsed: false,
          items: [
            'maths/geometrie-plane',
            'maths/geometrie-espace',
            'maths/reperage',
          ],
        },
        // V. Algorithmique et Programmation (1 fiche)
        'maths/algorithmique-programmation',
      ],
    },
    
    // Les autres matières seront ajoutées au fur et à mesure
    // (pas de catégories vides pour éviter les erreurs de build)
  ],
};

export default sidebars;
