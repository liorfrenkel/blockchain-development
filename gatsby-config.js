const CATCH_PHRASE =
  'I appreciate my freedom, I appreciate my privacy I appreciate my independent and in control of my own destiny and my own wealth...';

module.exports = {
  siteMetadata: {
    title: 'Blockchain Development',
    description: CATCH_PHRASE,
    author: '',
    catchPhrase: CATCH_PHRASE,
    email: 'info@blockchaindev.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BlockchainDevelopment',
        short_name: 'blockchain',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#f2f2f2',
        display: 'minimal-ui',
        icon: 'src/images/icon-black.jpg',
      },
    },
    'gatsby-plugin-emotion',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
