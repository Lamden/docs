
module.exports = {
 
 

  title: 'Lamden Documentation Website',
  tagline: 'All you need for your next dApp',
  url: 'https://docs.lamden.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Lamden', // Usually your GitHub org/user name.
  projectName: 'lamden-docs-site', // Usually your repo name.
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
          to: 'docs/index',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
          
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
          to: 'blockchain',
          activeBasePath: 'pages',
          label: 'Blockchain',
          position: 'right',
        },
        {
          to: 'develop',
          activeBasePath: 'pages',
          label: 'Develop',
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
      copyright: `Copyright © ${new Date().getFullYear()} Lamden USA LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
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

        plugins: ['@docusaurus/plugin-ideal-image',
                  '@docusaurus/docusaurus-gist-embed'
                ],
        themes: ['@docusaurus/theme-live-codeblock'],
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
          
        },
      },
    ],
  ],
};
