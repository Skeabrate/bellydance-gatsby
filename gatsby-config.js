const path = require('path');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Leyla Bellydance`,
    description:
      'Posiadam państwowe uprawnienia do wykonywania zawodu instruktora belly dance. Jestem dyplomowaną Instruktorką Tańca Sportowego o specjalności belly dance oraz dyplomowanym Instruktorem Sportu. Nauczam różnych odmian tańca orientalnego. Zwracam uwagę na szlifowanie techniki, grację i poprawę kondycji oraz sylwetki każdej z ćwiczących pań. Swoim barwnym tańcem staram się uświetnić ważne wydarzenia w Państwa życiu: jubileusze, rocznice, szampański Sylwester czy rodzinne festyny.',
    siteUrl: `https://leyla-bellydance.pl/`,
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pl-PL',
      },
    },
    'gatsby-plugin-preload-fonts',
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `e6ef1ne0cw4m`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: 'gatsby-plugin-contentful-optional-fields',
      options: {
        optionalFields: {
          ContentfulPost: {
            date: 'String',
            description: 'Node',
          },
          ContentfulBlog: {
            date: 'String',
            meta_description: 'String',
          },
          ContentfulBlogContent: {
            references: 'Node',
          },
        },
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
