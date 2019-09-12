const path = require('path') // import Nodejs's path function in order to get the slug of our .md files

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions
    // console.log(node)
    if (node.internal.type === 'MarkdownRemark'){ //gets our .md file nodes and get the slug
        slug = path.basename(node.fileAbsolutePath, '.md')

        // console.log('@@@@@@@@@',slug)
        // created a new field in node to hold file slug
        // Adding our slug value to the slug key value pair inside our .md nodes
        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}


module.exports.createPages = async ({graphql, actions}) => {
    const { createPage } = actions

    // 1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js')//curent location to destination
    // const aboutTemplate = path.resolve('./src/templates/about.js') not gonna be making multiple /about/... pages
    // will use for events/connect pages
    const eventsTemplate = path.resolve('./src/templates/events.js')

    const connectTemplate = path.resolve('./src/templates/connect.js')

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            category
                        }
                    }
                }
            }
        }
    `)
    // console.log(res.data.allMarkdownRemark.edges)

    // will use a conditional here to path to each subpage:
    // res.data.allMarkdownRemark.edges.node.frontmatter.category .... path: `/events/... with different template 
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        // console.log(edge.node)
        if (edge.node.frontmatter.category === 'Events') {
            // console.log(edge.frontmatter.category)
            createPage({
                component: eventsTemplate,
                path: `/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
        else if (edge.node.frontmatter.category === 'BLOG') {
            createPage({
                component: blogTemplate,
                path: `/blog/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
        else if (edge.node.frontmatter.category === 'Connect') {
            createPage({
                component: connectTemplate,
                path: `/${edge.node.fields.slug}`,
                context: {
                    slug: edge.node.fields.slug
                }
            })
        }
    })

    // res.data.allMarkdownRemark.edges.forEach((edge) => {
    //     createPage({
    //         component: blogTemplate,
    //         path: `/blog/${edge.node.fields.slug}`,
    //         context: {
    //             slug: edge.node.fields.slug
    //         }
    //     })
    // })

    // 2. get markdown data
    // 3. create new pages
}

