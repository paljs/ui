import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Sidebar from './sidebar'
import './layout.css'

class Layout extends React.Component {
  state = {
    active: false,
  }

  toggleSidebar = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { children } = this.props
    const { active } = this.state
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
                sidebar {
                  pages {
                    slug
                    title
                  }
                }
              }
            }

            components: allMdx {
              edges {
                node {
                  id
                  frontmatter {
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
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: 'description',
                  content:
                    'Template for creating design system documentatation',
                },
                {
                  name: 'keywords',
                  content: 'design system, style guide, documentation',
                },
              ]}
            >
              <html lang="en" />
            </Helmet>
            <Header
              active={active}
              toggleSidebar={this.toggleSidebar}
              siteTitle={data.site.siteMetadata.title}
            />
            <Sidebar
              active={active}
              toggleSidebar={this.toggleSidebar}
              components={data.components.edges}
              sidebarPages={data.site.siteMetadata.sidebar.pages}
            />
            <div className="ContentArea">{children}</div>
          </>
        )}
      />
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
