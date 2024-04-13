import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Petar_mc\'s documentation',
  tagline: 'You can find documentation for all of my projects here',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/', // Change this from '/docs' to '/'

  organizationName: 'PetarMc1', // Usually your GitHub org/user name.
  projectName: 'Petar_mc-s-Docs', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/PetarMc1/Petar_mc-s-Docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Petar_mc\'s docs',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      
      items: [
       {
        type: 'dropdown',
        label: 'Generators', // Label for the dropdown item
        position: 'left', // Position in the navbar
        items: [
          {
            type: 'doc',
            docId: 'Generators/RGBgenerator/AboutTheProject',
            label: 'RGB Generator',
            sidebarId: 'gens', // Sidebar id for Dropdown Item 1
          },
          {
            type: 'doc',
            docId: 'Generators/FontGenerator/AboutTheProject',
            label: 'Font Generator',
            sidebarId: 'gens', // Sidebar id for Dropdown Item 2
          },
        ],
      },
        {
          href: "https://discord.gg/2Adsx4pMxU",
          className: "header-icons header-discord",
          position: "right",
        },
        {
          href: "https://github.com/PaperMC",
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
