module.exports = {
  siteMetadata: {
    title: 'Gatsby Documentation Starter',
    description:
      'Automatically generate docs for React components using MDX, react-docgen, and GatsbyJS',
    siteUrl: '#',
    sidebar: {
      pages: [
        {
          slug: '/about',
          title: 'about',
        },
      ],
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          posts: require.resolve('./src/templates/posts.js'),
          default: require.resolve('./src/templates/page-default.js'),
        },
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `components`,
        path: `../src/components/`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `img`,
    //     path: `${__dirname}/src/assets/img/`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       'gatsby-remark-copy-linked-files',
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           maxWidth: 1080,
    //         },
    //       },
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           // Class prefix for <pre> tags containing syntax highlighting;
    //           // defaults to 'language-' (eg <pre class="language-js">).
    //           // If your site loads Prism into the browser at runtime,
    //           // (eg for use with libraries like react-live),
    //           // you may use this to prevent Prism from re-processing syntax.
    //           // This is an uncommon use-case though;
    //           // If you're unsure, it's best to use the default value.
    //           classPrefix: 'language-',
    //           // This is used to allow setting a language for inline code
    //           // (i.e. single backticks) by creating a separator.
    //           // This separator is a string and will do no white-space
    //           // stripping.
    //           // A suggested value for English speakers is the non-ascii
    //           // character '›'.
    //           inlineCodeMarker: null,
    //           // This lets you set up language aliases.  For example,
    //           // setting this to '{ sh: "bash" }' will let you use
    //           // the language "sh" which will highlight using the
    //           // bash highlighter.
    //           aliases: {},
    //         },
    //       },
    //     ],
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: 'Design System - The Source of Truth',
    //     short_name: 'Design System',
    //     start_url: '/',
    //     background_color: '#F5F5F5',
    //     theme_color: '#005CDD',
    //     display: 'minimal-ui',
    //     icons: [
    //       {
    //         // Everything in /static will be copied to an equivalent
    //         // directory in /public during development and build, so
    //         // assuming your favicons are in /static/favicons,
    //         // you can reference them here
    //         src: `/assets/favicons/android-chrome-192x192.png`,
    //         sizes: `192x192`,
    //         type: `image/png`,
    //       },
    //       {
    //         src: `/assets/favicons/android-chrome-512x512.png`,
    //         sizes: `512x512`,
    //         type: `image/png`,
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: '#',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
    `gatsby-transformer-react-docgen`,
    `gatsby-plugin-offline`,
  ],
}
