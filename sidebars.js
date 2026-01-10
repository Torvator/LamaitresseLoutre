/**
 * Configuration de la sidebar pour les fiches
 */

const sidebars = {
  tutorialSidebar: [
    'intro',
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
    {
      type: 'category',
      label: '🔢 Mathématiques',
      items: [
        'mathematiques/test1',
        'mathematiques/test2',
      ],
    },
    {
      type: 'category',
      label: '🌍 Pluridisciplinaire',
      items: [
        'pluridisciplinaire/test1',
      ],
    },
  ],
};

export default sidebars;
