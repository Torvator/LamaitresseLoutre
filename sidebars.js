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
    // 🔢 MATHÉMATIQUES (à venir)
    // ========================================
    {
      type: 'category',
      label: '🔢 Mathématiques',
      collapsed: false,
      items: [
        // Fiches à venir
      ],
    },
    
    // ========================================
    // 🇬🇧 ANGLAIS (à venir)
    // ========================================
    {
      type: 'category',
      label: '🇬🇧 Anglais',
      collapsed: false,
      items: [
        // Fiches à venir
      ],
    },
    
    // ========================================
    // 🌍 HISTOIRE-GÉOGRAPHIE-EMC (à venir)
    // ========================================
    {
      type: 'category',
      label: '🌍 Histoire-Géographie-EMC',
      collapsed: false,
      items: [
        // Fiches à venir
      ],
    },
    
    // ========================================
    // 🔬 SCIENCES ET TECHNOLOGIE (à venir)
    // ========================================
    {
      type: 'category',
      label: '🔬 Sciences et Technologie',
      collapsed: false,
      items: [
        // Fiches à venir
      ],
    },
    
    // ========================================
    // 🎨 ARTS (à venir)
    // ========================================
    {
      type: 'category',
      label: '🎨 Arts',
      collapsed: false,
      items: [
        // Fiches à venir
      ],
    },
    
    // ========================================
    // ⚽ EPS (à venir)
    // ========================================
    {
      type: 'category',
      label: '⚽ EPS',
      collapsed: false,
      items: [
        // Fiches à venir
      ],
    },
  ],
};

export default sidebars;
