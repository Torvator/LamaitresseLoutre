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
        // Nombres et Calculs
        'maths/nombres-entiers-decimaux',
        'maths/fractions-nombres-rationnels',
        'maths/nombres-relatifs',
        'maths/puissances-racines-carrees',
        'maths/calcul-litteral',
        'maths/durees-calculs',
        // Organisation et gestion de données
        'maths/organisation-gestion-donnees',
        // Grandeurs et mesures
        'maths/grandeurs-mesures',
        // Géométrie
        'maths/geometrie-plane',
        'maths/geometrie-espace',
        'maths/reperage',
        // Algorithmique et programmation
        'maths/algorithmique-programmation',
      ],
    },
    
    // ========================================
    // 📜 HISTOIRE (12 fiches)
    // ========================================
    {
      type: 'category',
      label: '📜 Histoire',
      collapsed: false,
      items: [
        // Antiquité
        'histoire/prehistoire',
        'histoire/premieres-civilisations',
        'histoire/grece-antique',
        'histoire/rome',
        // Moyen Âge
        'histoire/moyen-age-societe-feodale',
        'histoire/eglise-moyen-age',
        // Temps modernes
        'histoire/renaissance',
        'histoire/grandes-decouvertes',
        // Révolution et XIXe
        'histoire/revolution-empire',
        'histoire/xixe-siecle',
        // XXe-XXIe siècles
        'histoire/guerres-mondiales',
        'histoire/monde-depuis-1945',
      ],
    },
    
    // ========================================
    // 🌍 GÉOGRAPHIE (8 fiches)
    // ========================================
    {
      type: 'category',
      label: '🌍 Géographie',
      collapsed: false,
      items: [
        // Cycle 3
        'geographie/geo_lieux_habite',
        'geographie/geo_loger_travailler',
        'geographie/geo_consommer',
        'geographie/geo_demographie_developpement',
        // Cycle 4
        'geographie/geo_ressources',
        'geographie/geo_risques_climat',
        'geographie/geo_urbanisation_mobilites',
        'geographie/geo_france_ue_mondialisation',
      ],
    },
    
    // ========================================
    // 🌈 EMC (6 fiches)
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
    // 🔬 SCIENCES & TECHNOLOGIE (15 fiches)
    // ========================================
    {
      type: 'category',
      label: '🔬 Sciences',
      collapsed: false,
      items: [
        // Matière et Énergie
        'sciences/matiere-etats-changements',
        'sciences/melanges-solutions',
        'sciences/atomes-molecules-reactions',
        'sciences/energie-sources-conversions',
        'sciences/electricite',
        // Mouvement et Signaux
        'sciences/mouvement-forces',
        'sciences/lumiere-optique',
        'sciences/son',
        // Le Vivant
        'sciences/vivant-classification-biodiversite',
        'sciences/fonctions-nutrition',
        'sciences/reproduction-developpement',
        'sciences/ecosystemes-environnement',
        // Corps Humain
        'sciences/corps-humain-sante',
        // Terre et Univers
        'sciences/terre-systeme-solaire',
        // Technologie
        'sciences/objets-techniques-programmation',
      ],
    },
    
    // ========================================
    // 🎨 ÉDUCATION ARTISTIQUE (5 fiches)
    // ========================================
    {
      type: 'category',
      label: '🎨 Arts',
      collapsed: false,
      items: [
        'arts/arts-plastiques-fondamentaux',
        'arts/arts-plastiques-oeuvres-2026',
        'arts/education-musicale-fondamentaux',
        'arts/education-musicale-oeuvres-2026',
        'arts/histoire-des-arts-2026',
      ],
    },
    
    // ========================================
    // ⚽ EPS (2 fiches)
    // ========================================
    {
      type: 'category',
      label: '⚽ EPS',
      collapsed: false,
      items: [
        'eps/eps-didactique-developpement',
        'eps/eps-apsa-champs-apprentissage',
      ],
    },
    
    // ========================================
    // 🇬🇧 ANGLAIS (3 fiches)
    // ========================================
    {
      type: 'category',
      label: '🇬🇧 Anglais',
      collapsed: false,
      items: [
        'anglais/anglais-grammaire',
        'anglais/anglais-didactique',
        'anglais/anglais-vocabulaire-culture',
      ],
    },
  ],
};

export default sidebars;
