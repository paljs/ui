import React, { Fragment } from 'react';
import ThemeTable from '../../components/ThemeTable';
import SEO from '../../components/SEO';

function Dark() {
  return (
    <Fragment>
      <SEO title="Default Theme" />
      <ThemeTable theme="dark" />
    </Fragment>
  );
}

export default Dark;
