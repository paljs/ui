const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'OAH-UI',
    description: 'React Styled Components with bootstrap grid system.',
    author: 'OAH Technology'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-layout',
    {
      resolve: 'gatsby-mdx',
      options: {
        decks: [],
        defaultLayouts: {
          default: path.resolve('./src/components/MdxLayout/index.js')
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-plugin-mdx-code-demo',
            options: {
              demoComponent: path.resolve('./src/components/Example.js')
            }
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              aliases: {}
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'oah-ui',
        short_name: 'OAH',
        start_url: '/dashboard',
        display: 'minimal-ui',
        icon: 'src/images/OAH.png' // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
