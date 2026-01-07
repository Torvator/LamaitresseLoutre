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

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
    {
      label: '🎯 Progression',
      to: '/progression',
      position: 'left',
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
          to: '/docs/francais',
        },
        {
          label: '🔢 Mathématiques',
          to: '/docs/mathematiques',
        },
        {
          label: '🌍 Pluridisciplinaire',
          to: '/docs/pluridisciplinaire',
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
