// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '知识库',
  tagline: 'Dinosaurs are cool',
  url: 'https://doc.xiping.work',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xiping.wang', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'plugin-image-zoom'
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '知识库',
        logo: {
          alt: 'logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'data-structures/数据结构-1.链表',
            position: 'left',
            label: '数据结构',
          },
          {
            type: 'doc',
            docId: 'network/计算机网络-1.概述',
            position: 'left',
            label: '计算机网络',
          },
          {
            type: 'doc',
            docId: 'operating-system/操作系统的基本概念',
            position: 'left',
            label: '操作系统',
          },
          {
            type: 'doc',
            docId: 'operating-system/操作系统的基本概念',
            position: 'left',
            label: 'Golang',
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/The-End-Hero',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '计算机',
            items: [
              {
                label: '数据结构',
                to: '/docs/operating-system/操作系统的基本概念',
              },
              {
                label: '操作系统',
                to: '/docs/operating-system/操作系统的基本概念',
              },
              {
                label: '计算机网络',
                to: '/docs/network/计算机网络-1.概述',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/The-End-Hero/xiping-work-docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xiping.wang, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        // id: 'support_us',
        content:
            '⭐️ 如果这个网站能帮助到你，欢迎给一个star支持作者<a target="_blank" rel="noopener noreferrer" href="https://github.com/The-End-Hero/xiping-work-docusaurus">GitHub</a>',
        backgroundColor: '#544a31',
        textColor: '#dbdce7',
        isCloseable: false,
      },
      // imageZoom: {
      //   options: {
      //     margin: 0,
      //     background: 'rgba(0,0,0,0.3)',
      //     scrollOffset: 0,
      //     container: '#zoom-container',
      //     template: '#zoom-template',
      //   },
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
