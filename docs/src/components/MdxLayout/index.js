import React from 'react';
import { MDXProvider } from '@mdx-js/tag';
import { Link } from 'gatsby';
import MdxLayoutStyle from './style';
import { CardBody } from 'oah-ui';

function ALink({ href, children }) {
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return <Link to={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function MdxLayout({ children }) {
  return (
    <MDXProvider
      components={{
        a: ALink
      }}
    >
      <MdxLayoutStyle>
        <CardBody>{children}</CardBody>
      </MdxLayoutStyle>
    </MDXProvider>
  );
}

export default MdxLayout;
