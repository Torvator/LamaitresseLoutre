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
    // 🔢 MATHÉMATIQUES (12 fiches complètes)
    // ========================================
    {
      type: 'category',
      label: '🔢 Mathématiques',
      collapsed: false,
      items: [
        // I. Nombres et Calculs (6 fiches)
        'maths/nombres-entiers-decimaux',
        'maths/fractions-nombres-rationnels',
        'maths/nombres-relatifs',
        'maths/puissances-racines-carrees',
        'maths/calcul-litteral',
        'maths/durees-calculs',
        
        // II. Organisation et gestion de données (1 fiche)
        'maths/organisation-gestion-donnees',
        
        // III. Grandeurs et mesures (1 fiche)
        'maths/grandeurs-mesures',
        
        // IV. Géométrie (3 fiches)
        'maths/geometrie-plane',
        'maths/geometrie-espace',
        'maths/reperage',
        
        // V. Algorithmique et programmation (1 fiche)
        'maths/algorithmique-programmation',
      ],
    },
    
    // ========================================
    // 📜 HISTOIRE (12 fiches - COMPLET !)
    // ========================================
    {
      type: 'category',
      label: '📜 Histoire',
      collapsed: false,
      items: [
        // Antiquité (4 fiches)
        'histoire/prehistoire',
        'histoire/premieres-civilisations',
        'histoire/grece-antique',
        'histoire/rome',
        
        // Moyen Âge (2 fiches)
        'histoire/moyen-age-societe-feodale',
        'histoire/eglise-moyen-age',
        
        // Temps modernes (2 fiches)
        'histoire/renaissance',
        'histoire/grandes-decouvertes',
        
        // Révolution et XIXe (2 fiches)
        'histoire/revolution-empire',
        'histoire/xixe-siecle',
        
        // XXe-XXIe siècles (2 fiches)
        'histoire/guerres-mondiales',
        'histoire/monde-depuis-1945',
      ],
    },
    
    // Les autres matières seront ajoutées au fur et à mesure
    // Géographie (10 fiches à venir)
    // Sciences (15 fiches à venir)
  ],
};

export default sidebars;
