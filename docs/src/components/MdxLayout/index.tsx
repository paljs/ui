import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Link } from 'gatsby';
import MdxLayoutStyle from './style';
import { CardBody } from '../../../../src';

const ALink: React.FC<{ href: string }> = ({ href, children }) => {
  const internal = /^\/(?!\/)/.test(href);

  if (internal) {
    return <Link to={href}>{children}</Link>;
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

const MdxLayout: React.FC = ({ children }) => {
  return (
    <MDXProvider
      components={{
        a: ALink,
      }}
    >
      <MdxLayoutStyle>
        <CardBody>{children}</CardBody>
      </MdxLayoutStyle>
    </MDXProvider>
  );
};

export default MdxLayout;
