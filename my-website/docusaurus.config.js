import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config = {
  title: 'Harvest Workshop',
  //tagline: 'Welcome to the Official Documentation Hub for ICICLE AI Institute \nExplore a centralized repository featuring component and API documentation, educational resources for both youth and professionals, workshop materials, ICICLE in a Nutshell videos, and much more.\nEasily filter content by tags or browse freely through our well-organized documentation to find exactly what you need.',
  favicon: 'img/favicon.ico',
  customFields: {
    heroHeading: 'Welcome to the Harvest Workshop',
    heroDescription:
      'Harvest Description',
  },

  // // Set the production url of your site here
  // url: 'https://your-docusaurus-site.example.com',
  // // Set the /<baseUrl>/ pathname under which your site is served
  // // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',


  url: 'https://ICICLE-ai.github.io', // Your GitHub Pages root
  baseUrl: '/harvest/', // The repository name, with a trailing slash
  organizationName: 'ICICLE-ai', // Your GitHub organization name
  projectName: 'harvest', // Your GitHub repository name
  deploymentBranch: 'gh-pages', // This is where GitHub Pages will be deployed
  trailingSlash: false, // Helps with correct URL resolution


  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  scripts: [
    {
      src: 'https://umami.pods.icicleai.tapis.io/script.js', //Correct Umami tracking script URL
      async: true,
      defer: true,
      'data-website-id': 'e1e727a2-edd2-436d-a3f0-3794e11d3718', //  Umami website ID
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themes: [
    'docusaurus-theme-openapi-docs',
  ],

  plugins: [
    // [
    //   '@docusaurus/plugin-content-docs',
    //   {
    //     id: 'api',                // plugin ID (must be unique)
    //     path: 'api-docs',         // folder with .mdx for API docs
    //     routeBasePath: 'api',     // for the url
    //     sidebarPath: './sidebars.js',
    //     docItemComponent: '@theme/ApiItem', 
    //     showLastUpdateTime: true,
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cfp',
        path: 'call_for_papers', // this is where all the folder containning .md files are present
        // sidebarPath: './sidebars.js',
        sidebarPath: false,
        routeBasePath: 'call_for_papers', // this is for the url
        tagsBasePath: 'tags',
        showLastUpdateTime: true,
      },
  
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'agenda',
        path: 'agenda', // this is where all the folder containning .md files are present
        // sidebarPath: './sidebars.js',
        sidebarPath: false,
        routeBasePath: 'agenda', // this is for the url
        tagsBasePath: 'tags',
        showLastUpdateTime: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'committees',
        path: 'committees', 
        sidebarPath: false, 
        routeBasePath: 'committees',
        showLastUpdateTime: true,
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'travel_grant',
        path: 'travel_grant', 
        sidebarPath: false, 
        routeBasePath: 'travel_grant',
        showLastUpdateTime: true,
      },
    ],

  
    // [
    //   "@dipakparmar/docusaurus-plugin-umami",
    //     /** @type {import('@dipakparmar/docusaurus-plugin-umami').Options} */
    //     ({
    //       websiteID: "e1e727a2-edd2-436d-a3f0-3794e11d3718", // Required
    //       analyticsDomain: "icicle-ai.github.io", // Required
    //       dataHostURL: "https://umami.pods.icicleai.tapis.io", //Required
    //       dataAutoTrack: true, // Optional
    //       dataDoNotTrack: false, // Optional
    //       dataCache: true, // Optional
    //       dataDomains: "icicle-ai.github.io", // comma separated list of domains, *Recommended*
    //     }),
    // ],
    
    // [
    //   require.resolve('docusaurus-lunr-search'),
    //   {
    //     languages: ['en'],
    //     indexBaseUrl: true,
    //     highlightResult: true,
    //     maxHits: 8,
    //   },
    // ],

  ],

  themeConfig: {
    image: 'img/ICICLE_logo.jpg',
    navbar: {
      title: 'Harvest Workshop',
      logo: {
        alt: 'My Site Logo',
        src: 'img/ICICLE_logo.jpg',
      },
      items: [
        // { to: 'harvest/docs/intro', label: 'Documentation', position: 'left' },
        // { to: 'harvest/api/intro', label: 'APIs', position: 'left' }, // API Docs
        { to: 'call_for_papers', label: 'Call for Papers', position: 'left' }, // Education 
        { to: 'agenda', label: 'Agenda', position: 'left' },
        { to: 'committees', label: 'Committees', position: 'left' }, 
        { to: 'travel_grant', label: 'Travel Grant', position: 'left' },
        // { to: 'workshops/intro', label: 'Workshops', position: 'left' },   
        // { to: 'harvest/sample_docs/intro', label: 'Sample Documentation', position: 'left' },
        // { type: 'dropdown', label: 'Tags',  position: 'left' ,items: [
        //     {
        //       label: 'Documentation Tags',
        //       to: 'harvest/docs/tags',
        //     },
        //     {
        //       label: 'Education Tags',
        //       to: 'harvest/education/tags',
        //     },
        //   ],
        // },
        { type: 'search', position: 'right',},
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} National Science Foundation (NSF) funded AI institute for Intelligent Cyberinfrastructure with Computational Learning in the Environment (ICICLE) (OAC 2112606). Learn more about <a href="https://icicle.ai/" target="_blank" rel="noopener noreferrer">ICICLE AI Institute.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

module.exports = config;
