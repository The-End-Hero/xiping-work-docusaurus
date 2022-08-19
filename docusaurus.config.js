// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '知识库',
  tagline: '计算机基础/面试/八股/实践',
  url: 'https://doc.xiping.work/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'xiping.wang', // Usually your GitHub org/user name.
  projectName: 'xiping-work-docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 60,
        max: 1030, // 最大缩放图片尺寸。
        min: 640, // 最小缩放图片尺寸。 如果原始值比这还低，会使用原图尺寸。
        steps: 2, // 在 min 和 max 之间最多生成的图片数量（包含两端点）
        disableInDev: false,
      },
    ],
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
            type: 'dropdown',
            label: '计算机基础',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: '计算机网络',
                docId: 'network/计算机网络-1.概述',
              },
              {
                type: 'doc',
                label: '操作系统',
                docId: 'operating-system/操作系统的基本概念',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: '数据结构与算法',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: '数据结构',
                docId: 'data-structures/数据结构-数组',
              },
              {
                type: 'doc',
                label: '常见算法',
                docId: 'data-structures/数据结构-数组',
              },
              // ... more items
            ],
          },
          {
            type: 'dropdown',
            label: '前端',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'react相关',
                docId: 'react/状态管理',
              },
              {
                type: 'doc',
                label: '工程化相关',
                docId: 'front-end-engineering/包管理工具',
              },
              {
                type: 'doc',
                label: '浏览器相关',
                docId: 'browser/浏览器架构'
              },
              {
                type: 'doc',
                label: '手写系列',
                docId: 'handwrite/call'
              }
              // ... more items
            ],
          },
          // {
          //   type: 'dropdown',
          //   label: '英语',
          //   position: 'left',
          //   items: [
          //     {
          //       type: 'doc',
          //       label: '词根词缀',
          //       docId: 'english/rootsandaffixes'
          //     }
          //   ]
          // },
          // {
          //   type: 'doc',
          //   docId: 'data-structures/数据结构-链表',
          //   position: 'left',
          //   label: '数据结构',
          // },
          // {
          //   type: 'doc',
          //   docId: 'network/计算机网络-1.概述',
          //   position: 'left',
          //   label: '计算机网络',
          // },
          // {
          //   type: 'doc',
          //   docId: 'operating-system/操作系统的基本概念',
          //   position: 'left',
          //   label: '操作系统',
          // },
          // {
          //   type: 'doc',
          //   docId: 'operating-system/操作系统的基本概念',
          //   position: 'left',
          //   label: 'Golang',
          // },
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
      imageZoom: {
        options: {
          // margin: 0,
          background: 'var(--img-bgc)',
          // scrollOffset: 0,
          // container: '#zoom-container',
          // template: '#zoom-template',
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      // algolia: {
      //   // Algolia 提供的应用 ID
      //   appId: 'YOUR_APP_ID',
      //
      //   //  公开 API 密钥：提交它没有危险
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //
      //   indexName: 'YOUR_INDEX_NAME',
      //
      //   // 可选：见下文
      //   contextualSearch: true,
      //
      //   // 可选：声明哪些域名需要用 window.location 型的导航而不是 history.push。 适用于 Algolia 配置会爬取多个文档站点，而我们想要用 window.location.href 在它们之间跳转时。
      //   externalUrlRegex: 'external\\.com|domain\\.com',
      //
      //   // 可选：Algolia 搜索参数
      //   searchParameters: {},
      //
      //   // 可选：搜索页面的路径，默认启用（可以用 `false` 禁用）
      //   searchPagePath: 'search',
      //
      //   // ……其他 Algolia 参数
      // },
    }),
};

module.exports = config;
