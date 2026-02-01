// @ts-check

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🦦 La Maîtresse Loutre',
  tagline: 'Préparation CRPE',
  favicon: 'img/favicon.ico',

  url: 'https://torvator.github.io',
  baseUrl: '/LamaitresseLoutre/',

  organizationName: 'torvator',
  projectName: 'LamaitresseLoutre',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ========== PLUGIN QUIZ ==========
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'quiz',
        path: 'quiz',
        routeBasePath: 'quiz',
        sidebarPath: './sidebarsQuiz.js',
      },
    ],
  ],
  // ==================================

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      navbar: {
        title: '🦦 La Maîtresse Loutre',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Mes Fiches',
          },
          {
            to: '/quiz/intro',
            position: 'left',
            label: '📝 Quiz',
          },
          {
            to: '/suivi',
            label: '📊 Suivi',
            position: 'left',
          },
          {
            to: '/commentaires',
            label: '💬 Commentaires',
            position: 'left',
          },
          {
            to: '/profil',
            label: '👤 Profil',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `🦦 La Maîtresse Loutre - CRPE 2026 - Fait avec ❤️`,
      },
    }),
};

export default config;
