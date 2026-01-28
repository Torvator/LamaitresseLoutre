import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '🦦 La Maîtresse Loutre',
  tagline: 'Préparation CRPE',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://torvator.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/LamaitresseLoutre/',

  // GitHub pages deployment config.
  organizationName: 'torvator', // Usually your GitHub org/user name.
  projectName: 'LamaitresseLoutre', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // C'est ici que tu as défini que tes docs sont sur /fiches
          routeBasePath: 'fiches',
          editUrl:
            'https://github.com/torvator/LamaitresseLoutre/tree/main/',
        },
        blog: false, // Blog désactivé comme dans ta config
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // --- CORRECTION DU PLUGIN DE RECHERCHE ---
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["fr"],
        indexDocs: true,
        indexBlog: false,
        // C'EST CETTE LIGNE QUI MANQUAIT :
        // On dit au plugin d'aller chercher le contenu dans "/fiches" et pas "/docs"
        docsRouteBasePath: "/fiches",
        
        // Optionnel : Surligne le mot cherché quand on arrive sur la page
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],
  // -----------------------------------------

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
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
          // Le lien GitHub
          {
            href: 'https://github.com/torvator/LamaitresseLoutre',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // J'ai gardé ton footer simple s'il n'y a pas de liens spécifiques
        ],
        copyright: `🦦 Préparation CRPE 2026 - Bon courage Marie ! 💪✨`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;