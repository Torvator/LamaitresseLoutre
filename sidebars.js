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
    
    // ========================================
    // 🌍 GÉOGRAPHIE (8 fiches - COMPLET !)
    // ========================================
    {
      type: 'category',
      label: '🌍 Géographie',
      collapsed: false,
      items: [
        // Cycle 3 (4 fiches)
        'geographie/lieux-habite',
        'geographie/loger-travailler',
        'geographie/consommer',
        'geographie/demographie-developpement',
        
        // Cycle 4 (4 fiches)
        'geographie/ressources',
        'geographie/risques-climat',
        'geographie/urbanisation-mobilites',
        'geographie/france-ue-mondialisation',
      ],
    },
    
    // ========================================
    // 🌈 EMC - Enseignement Moral et Civique (6 fiches - COMPLET !)
    // ========================================
    {
      type: 'category',
      label: '🌈 EMC',
      collapsed: false,
      items: [
        'emc/sensibilite',
        'emc/droit-regle',
        'emc/jugement',
        'emc/engagement',
        'emc/laicite',
        'emc/egalite-discriminations',
      ],
    },
    
    // ========================================
    // 🔬 SCIENCES & TECHNOLOGIE (2/16 fiches - EN COURS)
    // ========================================
    {
      type: 'category',
      label: '🔬 Sciences',
      collapsed: false,
      items: [
        // Physique-Chimie (2/6 fiches)
        'sciences/matiere',
        'sciences/atomes-molecules-ions',
        // 'sciences/reactions-chimiques',
        // 'sciences/energie',
        // 'sciences/electricite',
        // 'sciences/forces-mouvements',
        
        // SVT - Sciences de la Vie (0/5 fiches à venir)
        // 'sciences/vivant',
        // 'sciences/corps-humain-nutrition',
        // 'sciences/corps-humain-reproduction',
        // 'sciences/genetique-evolution',
        // 'sciences/ecologie',
        
        // SVT - Sciences de la Terre (0/2 fiches à venir)
        // 'sciences/geologie',
        // 'sciences/astronomie',
        
        // Technologie (0/3 fiches à venir)
        // 'sciences/objets-techniques',
        // 'sciences/informatique-programmation',
        // 'sciences/developpement-durable',
      ],
    },
    
    // ========================================
    // 🎨 HISTOIRE DE L'ART (8 fiches - COMPLET !)
    // ========================================
    {
      type: 'category',
      label: '🎨 Histoire de l\'Art',
      collapsed: false,
      items: [
        'arts/prehistoire-antiquite',
        'arts/moyen-age',
        'arts/renaissance',
        'arts/classique',
        'arts/xixe-siecle',
        'arts/xxe-siecle',
        'arts/art-contemporain',
        'arts/architecture',
      ],
    },
  ],
};

export default sidebars;
