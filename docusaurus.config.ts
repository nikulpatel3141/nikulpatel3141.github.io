import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Nikul Patel',
  tagline: '#TODO: add a tagline',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nikulpatel3141.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nikulpatel3141', // Usually your GitHub org/user name.
  projectName: 'personal_website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    { src: "/js/flow_tracker.js", defer: true },
    { src: "/js/short_tracker.js", defer: true },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '/home',

          // ... configuration object here
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/knight.svg',
    navbar: {
      title: 'Nikul Patel',
      logo: {
        alt: 'My Site Logo',
        src: 'img/knight.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Wiki',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/home', position: 'left', label: "Home" },
        {
          href: 'https://github.com/nikulpatel3141',
          position: 'right',
          className: 'header-github-link header-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.linkedin.com/in/nikul-patel-048a47113',
          position: 'right',
          className: 'header-linkedin-link header-link',
          'aria-label': 'LinkedIn Profile',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Nikul Patel, built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['bash', 'python', 'cpp', 'rust'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
