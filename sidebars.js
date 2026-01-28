// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  crpeSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '🏠 Accueil',
    },
    {
      type: 'doc',
      id: 'suivi',
      label: '📊 Suivi de progression',
    },
    {
      type: 'category',
      label: '🔬 Sciences et Technologie',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '🧪 Matière et Énergie',
          items: [
            'sciences/matiere-etats-changements',
            'sciences/melanges-solutions',
            'sciences/atomes-molecules-reactions',
            'sciences/energie-sources-conversions',
            'sciences/electricite',
          ],
        },
        {
          type: 'category',
          label: '⚙️ Mouvement, Forces et Signaux',
          items: [
            'sciences/mouvement-forces',
            'sciences/lumiere-optique',
            'sciences/son',
          ],
        },
        {
          type: 'category',
          label: '🌱 Le Vivant',
          items: [
            'sciences/vivant-classification-biodiversite',
            'sciences/fonctions-nutrition',
            'sciences/reproduction-developpement',
            'sciences/ecosystemes-environnement',
          ],
        },
        {
          type: 'category',
          label: '🫀 Corps Humain et Santé',
          items: [
            'sciences/corps-humain-sante',
          ],
        },
        {
          type: 'category',
          label: '🌍 Terre et Univers',
          items: [
            'sciences/terre-systeme-solaire',
          ],
        },
        {
          type: 'category',
          label: '💻 Technologie et Programmation',
          items: [
            'sciences/objets-techniques-programmation',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🎨 Éducation Artistique',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '🖼️ Arts Plastiques',
          items: [
            'arts/arts-plastiques-fondamentaux',
            'arts/arts-plastiques-oeuvres-2026',
          ],
        },
        {
          type: 'category',
          label: '🎵 Éducation Musicale',
          items: [
            'arts/education-musicale-fondamentaux',
            'arts/education-musicale-oeuvres-2026',
          ],
        },
        {
          type: 'category',
          label: '🏛️ Histoire des Arts',
          items: [
            'arts/histoire-des-arts-2026',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '⚽ EPS',
      collapsed: false,
      items: [
        'eps/eps-didactique-developpement',
        'eps/eps-apsa-champs-apprentissage',
      ],
    },
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

module.exports = sidebars;
