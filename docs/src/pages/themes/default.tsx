import React, { Fragment } from 'react';
import ThemeTable from '../../components/ThemeTable';
import SEO from '../../components/SEO';

function Default() {
  return (
    <Fragment>
      <SEO title="Default Theme" />
      <ThemeTable theme="default" />
    </Fragment>
  );
}

export default Default;
