const path = require('path') // import Nodejs's path function in order to get the slug of our .md files

module.exports.onCreateNode = ({node, actions}) => {
    const { createNodeField } = actions
    // console.log(node)
    if (node.internal.type === 'MarkdownRemark'){ //gets our .md file nodes and get the slug
        slug = path.basename(node.fileAbsolutePath, '.md')

        // console.log('@@@@@@@@@',slug)

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

    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    // 2. get markdown data
    // 3. create new pages
}

