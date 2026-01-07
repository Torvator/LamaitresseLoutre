// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🦦 La Maîtresse Loutre',
  tagline: 'Préparation CRPE 2026 avec douceur et efficacité',
  favicon: 'img/logo-loutre.png',

  url: 'https://torvator.github.io',
  baseUrl: '/LamaitresseLoutre/',
  
  organizationName: 'torvator',
  projectName: 'LamaitresseLoutre',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // CORRECTION : Un seul i18n, en français
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
          // CORRECTION : Supprimer l'editUrl pour ne pas avoir le lien "Edit this page"
        },
        blog: false, // CORRECTION : Désactiver le blog
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'La Maîtresse Loutre',
        logo: {
          alt: 'Loutre studieuse',
          src: 'img/logo-loutre.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '📚 Mes fiches',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Ressources',
            items: [
              {
                label: 'Fiches de révision',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Matières',
            items: [
              {
                label: '📝 Français',
                to: '/docs/category/français',
              },
              {
                label: '🔢 Mathématiques',
                to: '/docs/category/mathématiques',
              },
              {
                label: '🌍 Pluridisciplinaire',
                to: '/docs/category/pluridisciplinaire',
              },
            ],
          },
        ],
        copyright: `🦦 Préparation CRPE 2026 - Tu vas réussir Marie ! 💪✨`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
