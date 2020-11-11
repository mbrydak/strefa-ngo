module.exports = {
  title: 'Strefa NGO',
  tagline: 'Dokumentacja projektowa',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'CodersCrew',
  projectName: 'strefa-ngo',
  themeConfig: {
    navbar: {
      title: 'Strefa NGO - dokumentacja',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/CodersCrew/strefa-ngo',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/CodersCrew/strefa-ngo',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/theme.css'),
        },
      },
    ],
  ],
};
