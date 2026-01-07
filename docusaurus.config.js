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

  onBrokenLinks: 'warn', // On met en warning pour ne pas bloquer le build
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
        docs: false, // On désactive complètement les docs pour l'instant
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
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      
      navbar: {
        title: '🦦 La Maîtresse Loutre',
        logo: {
          alt: 'Loutre studieuse',
          src: 'img/logo-loutre.jpg',
        },
        items: [], // Navbar vide pour l'instant
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
