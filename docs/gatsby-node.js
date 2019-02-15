/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')
const componentWithMDXScope = require('gatsby-mdx/component-with-mdx-scope')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    name
                    menu
                    title
                  }
                  parent {
                    ... on File {
                      name
                      sourceInstanceName
                    }
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        result.data.allMdx.edges.forEach(async ({ node }) => {
          createPage({
            path: `/${node.frontmatter.menu.toLowerCase()}/${node.parent.name.toLowerCase()}`,
            component: componentWithMDXScope(
              path.resolve('./src/templates/posts.js'),
              node.code.scope
            ),
            context: {
              id: node.id,
              name: node.frontmatter.name,
            },
          })
        })
      })
    )
  })
}
