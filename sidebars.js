/**
 * Configuration de la sidebar pour les fiches
 */

const sidebars = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: '📝 Français',
      items: [
        'francais/test1',
        'francais/test2',
        'francais/test3',
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
