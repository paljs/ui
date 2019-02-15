import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="content">
      <h1>Style Guide Guide</h1>
      <h3>A boilerplate for creating superb style guides</h3>
      <p>
        The homepage of a style guide should provide high-level information
        around what the design system is, what benefits it provides, who it’s
        for, and how to get started with it. Like any good index page, it should
        provide clear navigation to key parts of the website.
      </p>
      <Link to="about" className="btn">
        Get Started
      </Link>
      <h2>Design System Benefits</h2>
      <p>
        Explain how the design system benefits users and the business. For
        inspiration, check out over 180 examples of design systems at
        Styleguides.io. tivizes teams to use the system, and shows components in
        the wild.
      </p>
      <h2>Contributing info</h2>
      <p>
        If it’s desirable to have people from across the organization contribute
        to the design system, linking to the contributing page from the homepage
        could be a good idea.
      </p>
    </div>
  </Layout>
)

export default IndexPage
