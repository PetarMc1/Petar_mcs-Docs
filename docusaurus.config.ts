import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Petar_mc\'s documentation',
  tagline: 'You can find documentation for all of my projects here',
  favicon: 'https://8nchauor6rssdjsw.public.blob.vercel-storage.com/cropped-blue-head-logo.ico',

  url: 'https://docs.petarmc.com',
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
  // image: 'img/docusaurus-social-card.jpg',

    //algolia: {
     // appId: 'VFLG6ZN2BY',
    //  apiKey: '1f86b13816905da148de47e80a9cfe10',
     // indexName: 'petarmc',
      //contextualSearch: true,
 //   },

    navbar: {
      title: 'Petar_mc\'s docs',
      logo: {
        alt: 'Site Logo',
        src: 'https://8nchauor6rssdjsw.public.blob.vercel-storage.com/cropped-blue-head-logo.svg',
      },
      
      items: [
        {
          type: 'doc',
          docId: '/api-v2/getting-started',
          label: 'Minecraft Items API v2',
          sidebarId: 'api',
        },


       {
        type: 'dropdown',
        label: 'Generators',
        position: 'left',
        items: [
          {
            type: 'doc',
            docId: 'Generators/RGBgenerator/AboutTheProject',
            label: 'RGB Generator',
            sidebarId: 'generators',
          },
          {
            type: 'doc',
            docId: 'Generators/FontGenerator/AboutTheProject',
            label: 'Font Generator',
            sidebarId: 'generators',
          },
        ],
       },



        {
          href: "https://discord.gg/2Adsx4pMxU",
          className: "header-icons header-discord",
          position: "right",
        },
        {
          href: "https://github.com/PetarMc1",
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
