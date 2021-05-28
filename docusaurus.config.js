/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Workstation Setup Notes',
  tagline: 'Make setting up new workstation a well defined process',
  url: 'https://tianhaoz95-notebooks.github.io/workstation-setup',
  baseUrl: '/workstation-setup/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/branding/favicon.ico',
  organizationName: 'tianhaoz95-notebooks',
  projectName: 'workstation-setup',
  themeConfig: {
    navbar: {
      title: 'Workstation Setup Notes',
      logo: {
        alt: 'Workstation Setup Notes Logo',
        src: 'img/branding/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'index',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/tianhaoz95-notebooks/workstation-setup',
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
              label: 'Tutorial',
              to: '/docs/index',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/TheSWE2',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tianhaoz95-notebooks/workstation-setup',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tianhao Zhou. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/tianhaoz95-notebooks/workstation-setup/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/tianhaoz95-notebooks/workstation-setup/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
