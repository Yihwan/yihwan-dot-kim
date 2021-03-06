const path = require('path');

module.exports = {
  siteMetadata: {
    title: "Yihwan Kim",
    description: "Hi, I'm Yihwan. I'm a software engineer at Curology. I like working with React, Gatsby, Laravel, Rails, and LEGO. This is my website.",
    author: `Yihwan Kim`,
    url: `https://yihwan.kim`,
    image: `/preview.png`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-lodash',
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(`./src/components/commandLineInterface`)
        }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        content: path.join(__dirname, 'content')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/changelog`,
        name: `changelog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `yihwan-dot-kim`,
        short_name: `yihwan`,
        start_url: `/`,
        background_color: `#212529`,
        theme_color: `#212529`,
        display: `minimal-ui`,
        icon: `content/assets/favicon.png`, // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-119690274-2",
      },
    },
  ],
}
