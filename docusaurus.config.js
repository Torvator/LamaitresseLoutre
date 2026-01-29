import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🦦 La Maîtresse Loutre',
  tagline: 'Préparation CRPE',
  favicon: 'img/favicon.ico',

  // Votre URL de production
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
          routeBasePath: 'fiches',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Désactiver le bouton jour/nuit
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '🦦 La Maîtresse Loutre',
        logo: {
          alt: 'La Maîtresse Loutre Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Mes Fiches',
          },
          {to: '/suivi', label: '📊 Suivi', position: 'left'},
          {to: '/commentaires', label: '💬 Commentaires', position: 'left'},
          {to: '/profil', label: '👤 Profil', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `🦦 Préparation CRPE 2026 - Bon courage Marie ! 💪✨`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
