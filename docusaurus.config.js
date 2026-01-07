// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'La Maîtresse Loutre',
  tagline: 'Préparation CRPE 2026 - Tu vas réussir Marie ! 💪',
  favicon: 'img/favicon.ico',

  // Configuration GitHub Pages
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
          routeBasePath: '/', // Les docs deviennent la racine du site
        },
        blog: false, // Pas de blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Couleurs par défaut
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      
      // Barre de navigation
      navbar: {
        title: '🦦 La Maîtresse Loutre',
        logo: {
          alt: 'Loutre studieuse',
          src: 'img/logo-loutre.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Mes fiches',
          },
          {
            to: '/',
            label: '🏠 Accueil',
            position: 'left',
          },
        ],
        hideOnScroll: false,
      },
      
      // Pied de page simplifié
      footer: {
        style: 'dark',
        links: [],
        copyright: `🦦 Préparation CRPE 2026 - Bon courage Marie ! 💪✨`,
      },
      
      // Thème de code
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
