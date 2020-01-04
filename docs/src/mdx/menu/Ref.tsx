import React, { useRef } from 'react';
import { Menu, Button, MenuItemType, MenuRefObject } from 'oah-ui';
import { Link } from 'gatsby';

function Ref() {
  const menuRef = useRef<MenuRefObject>(null);
  const style = { maxWidth: '20rem', marginBottom: '1rem' };
  const items: MenuItemType[] = [
    {
      title: 'Guides',
      link: '/guides',
      children: [
        {
          title: 'Start new project',
          link: '/guides/start-new-project', // goes into @reach/router `router Link`
        },
        {
          title: 'Github Repository',
          url: 'https://github.com/AhmedElywa/oah-ui', // goes directly into `href` attribute
        },
      ],
    },
    {
      title: 'Components',
      link: '/components',
      children: [
        {
          title: 'Navigation',
          group: true,
        },
        {
          title: 'Menu',
          link: '/components/menu', // selected link
        },
      ],
    },
  ];
  return (
    <>
      <Button style={style} fullWidth onClick={() => menuRef.current?.toggle()}>
        toggle menu
      </Button>
      <Menu ref={menuRef} style={style} items={items} Link={Link} />
    </>
  );
}

export default Ref;
