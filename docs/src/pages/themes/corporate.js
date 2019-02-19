import React, { Fragment } from 'react';
import ThemeTable from '../../components/ThemeTable';
import SEO from '../../components/SEO';

function Corporate() {
  return (
    <Fragment>
      <SEO title="Corporate Theme" keywords={['OAH', 'application', 'react']} />
      <ThemeTable theme="corporate" />
    </Fragment>
  );
}

export default Corporate;
