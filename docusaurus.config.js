
module.exports = {
  title: 'Lamden Documentation Website',
  tagline: 'Full Documentation Coming Soon',
  url: 'https://docs.lamden.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Lamden', // Usually your GitHub org/user name.
  projectName: 'lamden-docs-site', // Usually your repo name.
  plugins: ['@docusaurus/plugin-ideal-image'],
  themes: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true
    },
    navbar: {
      title: 'Lamden',
      logo: {
        alt: 'Lamden Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          
        },
        {
          to: 'develop',
          activeBasePath: 'pages',
          label: 'Develop',
          position: 'right',
        },
        {
          to: 'mytutorials',
          activeBasePath: 'pages',
          label: 'Tutorials',
          position: 'right',
        },
        {
          to: 'wallet',
          activeBasePath: 'pages',
          label: 'Wallet',
          position: 'right',
        },
        {
          to: 'smart_contracting',
          activeBasePath: 'pages',
          label: 'Smart Contracting',
          position: 'right',
        },
        {
          to: 'https://blog.lamden.io/', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'https://github.com/facebook/docusaurus',
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
              label: 'Style Guide',
              to: 'docs/',
            },
           
          ],
        },
        {
          title: 'Community',
          items: [
            
            {
              label: 'Telegram',
              href: 'https://t.me/lamdenchat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lamdentau',
            },
            {
              label: 'Reddit',
              href: 'https://reddit.com/lamden',
            },
            
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'https://blog.lamden.io/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/lamden',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Copyright Lamden Sàrl, 2020.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // It is recommended to set document id as docs home page (`docs/` path).
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'tutorials-lottery',
        routeBasePath: 'tutorials/lottery',
        path: './tutorials/lottery',
        blogSidebarTitle: 'Tutorials',
        blogSidebarCount: 'ALL',
        showReadingTime: false,
        sortPosts: 'ascending',
      },
    ],
  ],
};
