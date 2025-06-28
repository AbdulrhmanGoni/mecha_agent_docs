import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mecha Agent',
  tagline: 'Create your own AI Chatbot and publish it to the world to chat with!',
  favicon: 'img/mecha_agent_logo-50x50.webp',

  url: 'https://abdulrhmangoni.github.io',
  baseUrl: '/mecha_agent_docs/',

  organizationName: "AbdulrhmanGoni",
  projectName: "mecha_agents_docs",

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
        },
        theme: {
          customCss: './src/css/global.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/mecha_agent_logo-100x100.webp',
    navbar: {
      title: 'Mecha Agent',
      logo: {
        alt: 'Mecha Agent Logo',
        src: 'img/mecha_agent_logo-70x70.webp',
        style: { borderRadius: "50%" }
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          position: 'left',
          label: 'Pricing',
          href: 'https://github.com/AbdulrhmanGoni/mecha_agent_client',
        },
        {
          href: 'https://github.com/AbdulrhmanGoni/mecha_agent',
          label: 'GitHub',
          position: 'right',
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
              label: 'Intro',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Mecha Agent',
          items: [
            {
              label: 'Mecha Agent App',
              href: 'https://github.com/AbdulrhmanGoni/mecha_agent_client',
            },
            {
              label: 'Pricing',
              href: 'https://github.com/AbdulrhmanGoni/mecha_agent_client',
            },
          ],
        },
        {
          title: 'Contact',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/abdulrhman-goni-857a36275',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/AbdulrhmanGoni',
            },
            {
              label: 'X',
              href: 'https://x.com/AbdulrhmanGoni',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Mecha Agent, All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
