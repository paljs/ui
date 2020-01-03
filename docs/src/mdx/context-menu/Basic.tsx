import React from 'react';
import { ContextMenu, Button } from '../../../../src';
import { Link } from 'gatsby';

function Basic() {
  return (
    <ContextMenu
      className="with-margin inline-block"
      placement="bottom"
      items={[
        { title: 'Profile', link: '/profile' },
        { title: 'Log out', link: '/logout' },
      ]}
      Link={Link}
    >
      <Button fullWidth>Context Menu</Button>
    </ContextMenu>
  );
}

export default Basic;
