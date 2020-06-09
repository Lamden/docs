module.exports = {
  title: 'Lamden Documentation Website',
  tagline: 'All you need for your next dApp',
  url: 'lamden.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'Lamden', // Usually your GitHub org/user name.
  projectName: 'https://github.com/Lamden/whitepaper', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Lamden',
      logo: {
        alt: 'Lamden Logo',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'smart_contracting',
          activeBasePath: 'pages',
          label: 'Smart Contracting',
          position: 'right',
        },
        {
          to: 'nodes',
          activeBasePath: 'pages',
          label: 'Nodes',
          position: 'right',
        },
        {
          to: 'wallet',
          activeBasePath: 'pages',
          label: 'Wallet',
          position: 'right',
        },

        {
          to: 'blockchain',
          activeBasePath: 'pages',
          label: 'Blockchain',
          position: 'right',
        },

        {
          to: 'lamden_world',
          activeBasePath: 'pages',
          label: 'Lamden World',
          position: 'left',
        },
        {
          to: 'test',
          activeBasePath: 'pages',
          label: 'Lamden World',
          position: 'left',
        },
        {to: 'https://blog.lamden.io/', label: 'Blog', position: 'left'},
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
      copyright: `Copyright © ${new Date().getFullYear()} Lamden USA LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'index',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        
        plugins: ['@docusaurus/plugin-ideal-image'],


        themes: ['@docusaurus/theme-live-codeblock'],
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
