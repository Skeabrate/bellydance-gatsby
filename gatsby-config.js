const path = require('path');

module.exports = {
    siteMetadata: {
        title: ``,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                assets: path.join(__dirname, 'src', 'assets'),
                components: path.join(__dirname, 'src', 'components'),
            },
        },
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: '7b5b2e0ee488417a1b81695b42d356',
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
                icon: 'src/assets/images/icon.png',
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
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: ['Great Vibes', 'Noto Serif:400,700'],
                display: 'swap',
            },
        },
    ],
};
