/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: 'TL Yeung',
  tagline: '',
  url: 'https://tlyeung.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/tlyeung.png',
  organizationName: 'tlyeung', // Usually your GitHub org/user name.
  projectName: 'tlyeung.github.io', // Usually your repo name.
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,
    },
    navbar: {
      title: 'TL Yeung\'s Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/tlyeung.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'about-me',
          position: 'left',
          label: 'About',
        }, {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'About',
          items: [
            {
              label: 'Me',
              to: '/docs/about-me',
            }, {
              label: 'This site',
              to: '/docs/about-this-site',
            },
          ],
        },
        {
          title: 'Find me',
          items: [
            {
              label: 'Email',
              href: 'mailto:contact@tlyeung.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tlyeung',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com/in/tlyeung',
            }
          ],
        }, {
          title: 'Blog',
          items: [
            {
              label: 'Atom',
              href: 'https://tlyeung.com/blog/atom.xml',
            },{
              label: 'RSS',
              href: 'https://tlyeung.com/blog/rss.xml',
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TL Yeung`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          feedOptions: {
            type: 'all',
          },
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
