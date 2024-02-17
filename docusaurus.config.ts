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

  presets: [
    [
      'classic',
      {
        docs: {
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
        { to: '/home', label: '🏡Home', position: 'right' },
        {
          href: 'https://github.com/nikulpatel3141',
          label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://www.linkedin.com/in/nikul-patel-048a47113',
          label: 'LinkedIn',
          position: 'right',
          className: 'header-linkedin-link',
          'aria-label': 'LinkedIn Profile',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Wiki',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/nikulpatel3141',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nikul's Project, built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
