import React, { Fragment } from 'react';
import ThemeTable from '../../components/ThemeTable';
import SEO from '../../components/SEO';

function Cosmic() {
  return (
    <Fragment>
      <SEO title="Cosmic Theme" keywords={['OAH', 'application', 'react']} />
      <ThemeTable theme="cosmic" />
    </Fragment>
  );
}

export default Cosmic;
