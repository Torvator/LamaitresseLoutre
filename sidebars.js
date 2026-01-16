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
        'geographie/geo_lieux_habite',
        'geographie/geo_loger_travailler',
        'geographie/geo_consommer',
        'geographie/geo_demographie_developpement',
        
        // Cycle 4 (4 fiches)
        'geographie/geo_ressources',
        'geographie/geo_risques_climat',
        'geographie/geo_urbanisation_mobilites',
        'geographie/geo_france_ue_mondialisation',
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
        'emc/emc_sensibilite',
        'emc/emc_droit_regle',
        'emc/emc_jugement',
        'emc/emc_engagement',
        'emc/emc_laicite',
        'emc/emc_egalite_discriminations',
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
        'sciences/sciences_matiere',
        'sciences/sciences_atomes_molecules_ions',
        // 'sciences/sciences_reactions_chimiques',
        // 'sciences/sciences_energie',
        // 'sciences/sciences_electricite',
        // 'sciences/sciences_forces_mouvements',
        
        // SVT - Sciences de la Vie (0/5 fiches à venir)
        // 'sciences/sciences_vivant',
        // 'sciences/sciences_corps_humain_nutrition',
        // 'sciences/sciences_corps_humain_reproduction',
        // 'sciences/sciences_genetique_evolution',
        // 'sciences/sciences_ecologie',
        
        // SVT - Sciences de la Terre (0/2 fiches à venir)
        // 'sciences/sciences_geologie',
        // 'sciences/sciences_astronomie',
        
        // Technologie (0/3 fiches à venir)
        // 'sciences/sciences_objets_techniques',
        // 'sciences/sciences_informatique_programmation',
        // 'sciences/sciences_developpement_durable',
      ],
    },
  ],
};

export default sidebars;
