/*
 * @license
 * Copyright OAH Technology. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { withRouter } from 'next/router';
import React from 'react';

function NavLink({ href, router, children }) {
  const handleClick = e => {
    e.preventDefault();
    router.push(href);
  };
  if (router.pathname === href) {
    return (
      <a onClick={handleClick} className="active">
        {children}
      </a>
    );
  } else {
    return <a onClick={handleClick}>{children}</a>;
  }
}
export default withRouter(NavLink);
