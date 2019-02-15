import React from 'react'
import { Link } from 'gatsby'
import capitalize from '../tools/capitalize'

const Sidebar = ({ active, components, sidebarPages }) => (
  <nav className={`Sidebar ${active ? 'visible' : ''}`}>
    {sidebarPages
      ? sidebarPages.map(sidebarPage => (
        <Link to={sidebarPage.slug}>{capitalize(sidebarPage.title)}</Link>
        ))
      : ''}
    <strong>Components:</strong>
    {components
      ? components.map(component => (
        <Link
          to={`${component.node.frontmatter.menu.toLowerCase()}/${component.node.parent.name.toLowerCase()}`}
        >
          {capitalize(component.node.parent.name)}
        </Link>
        ))
      : ''}
  </nav>
)

export default Sidebar
