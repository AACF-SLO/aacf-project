/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  /* siteMetaData used to query to get info */

  plugins: [
      'gatsby-plugin-sass',
      'gatsby-plugin-react-helmet',
      'gatsby-transformer-sharp',
      'gatsby-plugin-sharp',
      `gatsby-plugin-netlify`,
      `gatsby-plugin-styled-components`,
      {
        resolve: 'gatsby-plugin-manifest',
        options: {
          name: `AACF SLO Website`,
          short_name: `aacf slo`,
          start_url: `/`,
          background_color: `#f7f0eb`,
          theme_color: `#1F419B`,
          display: `minimal-ui`,
          icon: `src/images/logo.png`
        }
      },

      {
        resolve: 'gatsby-source-filesystem', /* source content from our md files */
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      },
      {
        resolve: 'gatsby-source-filesystem', /* source content from our img files */
        options: {
            name: 'images',
            path: `${__dirname}/src/images/`
        }
      },
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                  maxWidth: 750,
                  linkImagesToOriginal: false
              }
            }
          ]
        }
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
             `Roboto`,
             `Lato`,
             `Oswald\:200,300,400,400i,500,600,700`
          ],
          display: 'swap'
        }
      }
  ],
  siteMetadata: {
    title: 'AACF SLO',
    author: 'Andrew Lor',
    footer1: 'Made with God`s ❤️ by AACF SLO',
    footer2: 'Copyright © 2019, Asian American Christian Fellowship at California Polytechnic State University - San Luis Obispo'
    //social media, emails, etc.
  }

}
