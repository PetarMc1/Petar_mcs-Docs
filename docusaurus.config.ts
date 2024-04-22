import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Petar_mc\'s documentation',
  tagline: 'You can find documentation for all of my projects here',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'PetarMc1', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/PetarMc1/docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Petar_mc\'s docs',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      
      items: [
        {
          type: 'doc',
          docId: '/api-v2/getting-started',
          label: 'Minecraft Items API v2',
          sidebarId: 'api', // Sidebar id for Dropdown Item 1
        },
       {
        type: 'dropdown',
        label: 'Generators', // Label for the dropdown item
        position: 'left', // Position in the navbar
        items: [
          {
            type: 'doc',
            docId: 'Generators/RGBgenerator/AboutTheProject',
            label: 'RGB Generator',
            sidebarId: 'generators', // Sidebar id for Dropdown Item 1
          },
          {
            type: 'doc',
            docId: 'Generators/FontGenerator/AboutTheProject',
            label: 'Font Generator',
            sidebarId: 'generators', // Sidebar id for Dropdown Item 2
          },
        ],
      },
        {
          href: "https://discord.gg/2Adsx4pMxU",
          className: "header-icons header-discord",
          position: "right",
        },
        {
          href: "https://github.com/PatarMc1",
          className: "header-icons header-github",
          position: "right",
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/2Adsx4pMxU',
            }
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Main site',
              href: 'https://petarmc1.github.io',
            }
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Petar_mc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
