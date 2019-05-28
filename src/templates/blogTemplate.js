import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'

const Template = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <Helmet title={frontmatter.title} />

      <div>
        <div>
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`