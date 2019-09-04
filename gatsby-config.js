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
            `limelight`,
            `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
            `Montserrat`,
            `Lato`,
            `Staatliches`
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
