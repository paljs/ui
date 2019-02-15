import React, { Component } from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'

import Layout from '../components/layout'
import PropsTable from '../components/propstable'

export default class MDXRuntimeTest extends Component {
  render() {
    const { children, data, tableOfContents } = this.props
    return (
      <MDXProvider>
        <Layout>
          <div className="content">
            {children}
            <h1>{data.componentMetadata.displayName}</h1>
            <p>{data.componentMetadata.docblock}</p>
            <MDXRenderer tableOfContents={tableOfContents}>
              {data.mdx.code.body}
            </MDXRenderer>
            <h2 style={{ marginTop: '2rem' }}>Props:</h2>
            <PropsTable
              propMetaData={data.componentMetadata.childrenComponentProp}
            />
          </div>
        </Layout>
      </MDXProvider>
    )
  }
}

export const pageQuery = graphql`
  query($id: String!, $name: String!) {
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
      tableOfContents
    }
    componentMetadata(displayName: { eq: $name }) {
      id
      displayName
      docblock
      doclets
      childrenComponentProp {
        name
        docblock
        required
        parentType {
          name
        }
        type {
          value
        }
        defaultValue {
          value
          computed
        }
      }
      composes
    }
  }
`
