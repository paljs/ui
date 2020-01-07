import React from 'react';
import { ContextMenu, Button } from 'oah-ui';
import { Link } from 'gatsby';

function Basic() {
  return (
    <ContextMenu
      className="with-margin inline-block"
      placement="bottom"
      items={[
        { title: 'Profile', link: { to: '/profile' } },
        { title: 'Log out', link: { to: '/logout' } },
      ]}
      Link={Link}
    >
      <Button fullWidth>Context Menu</Button>
    </ContextMenu>
  );
}

export default Basic;
