const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://bellydance.netlify.app/`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        assets: path.join(__dirname, 'src', 'assets'),
        components: path.join(__dirname, 'src', 'components'),
        templates: path.join(__dirname, 'src', 'templates'),
        hooks: path.join(__dirname, 'src', 'hooks'),
        utils: path.join(__dirname, 'src', 'utils'),
        context: path.join(__dirname, 'src', 'context'),
      },
    },
    {
      resolve: 'gatsby-source-datocms',
      options: {
        apiToken: process.env.DATOCMS_API,
      },
    },
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'BellyDance',
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-smoothscroll',
  ],
};
