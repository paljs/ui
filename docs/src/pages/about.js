import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const AboutPage = ({ data }) => (
  <Layout>
    <div className="content">
      <h1>About the Design System</h1>
      <h3>A boilerplate for creating superb style guides</h3>
      <p>
        The homepage of a style guide should provide high-level information
        around what the design system is, what benefits it provides, who it’s
        for, and how to get started with it. Like any good index page, it should
        provide clear navigation to key parts of the website.
      </p>
      <button className="btn">Learn more</button>
    </div>
  </Layout>
)

export default AboutPage
