// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🦦 La Maîtresse Loutre',
  tagline: 'Préparation CRPE 2026 - Tu vas réussir Marie ! 💪',
  favicon: 'img/favicon.ico',

  // Configuration GitHub Pages
  url: 'https://torvator.github.io',
  baseUrl: '/LamaitresseLoutre/',
  
  organizationName: 'torvator',
  projectName: 'LamaitresseLoutre',

  onBrokenLinks: 'warn',
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // Désactive le bouton mode sombre
        respectPrefersColorScheme: false,
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
            to: '/login',
            label: '🔑 Connexion',
            position: 'right',
          },
        ],
        hideOnScroll: false,
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
