// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docusaurus-2.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'IshikaGupta3112', // Usually your GitHub org/user name.
  // projectName: 'docusaurus-site', // Usually your repo name.
  // deploymentBranch:'gh-pages',
  // trailingSlash:false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
      // Replace with your project's social card
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'My Site',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            label: 'Rachit',
            to: '/docs/Rachit',
            position: 'left'
          },
          {
            label:'Anshika',
            to: '/docs/anshika',
              position: 'left'
          },
          {
            label: 'Lakshya Goel',
            to: '/docs/Lakshya_Goel',
            position: 'left'
          },
          {
            label: 'Paras',
            to: '/docs/Paras_Upadhayay',
            position: 'left'
          },
          {
            label: 'Sarthak_Rastogi',
            to: '/docs/Sarthak_Rastogi',
            position: 'left'
          },
          {
            label: 'Lakshay Gupta',
            to: '/docs/lakshay_gupta',
            position: 'left'
          },
          {
            label: 'Akash Rajput',
            to: '/docs/akash',
            position: 'left'
          },
          {
            label: 'Ankit',
            to: '/docs/ankit',
            position: 'left'
          },
          {
            label: 'Yash Bansal',
            to: '/docs/Yash_Bansal',
            position: 'left'
          },
          {
            label: 'Rakshita',
            to: '/docs/Rakshita',
            position: 'left'
          },
          {
            label: 'saanvisonker',
            to: '/docs/Saanvi',
            position: 'left'
          },
          {
            label: 'Deepika Dubey',
            to: '/docs/Deepika_Dubey',
            position: 'left'
          },
          {
            label: 'Aakarsh Singh',
            to: '/docs/Aakarsh',
            position: 'left'
          },
          {
            label: 'Ayush',
            to: '/docs/ayush_agrawal',
            position: 'left'
          },
          {
            label: 'Poorva',
            to: '/docs/Poorva',
            position: 'left'
          },
          {
            label: 'Som',
            to: '/docs/Som_Gupta',
              position: 'left'
          },
          {
            label: 'Manya Aggarwal',
             to: '/docs/manya_aggarwal',
             position: 'left'
          },
          {
            label:'ujjwal Rana',
            to:'/docs/Ujjwal',
            position:'left'
          },
         { 
            label:'shreyash chaurasia',
            to:'/docs/shreyash chaurasia',
            position:'left'
        },

          {
            label: 'Prashant_Kushwaha',
            to: '/docs/Prashant_Kushwaha',
            position: 'left'
          },

          {
            label: 'Tejas Sharma',
            to: '/docs/Tejas_Sharma',
            position: 'left'
          },
          {
            label: 'Harsh Jain',
            to: '/docs/Harsh Jain',
            position: 'left'
          },
          {
            label: 'prashant_kumar',
            to: '/docs/prashant_kumar',
            position: 'left'
          },
          {
            label: 'Priyanshi Chauhan',
            to: '/docs/Priyanshi Chauhan',
            position: 'left'
          },
          {
            label: 'Abhinandan Pandey',
            to: '/docs/abhinandan',
            position: 'left'
          },
          
          // {
          //   label: 'Skills',
          //   to: '/docs/skills',
          //   position: 'left'
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/facebook/docusaurus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'home',
      //           to: '/docs/home',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'Twitter',
      //           href: 'https://twitter.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
