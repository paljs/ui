import React, { useRef } from 'react';
import { Menu, Row, Col, Button } from 'oah-ui';
import { Link } from 'gatsby';

function Ref() {
  const menuRef = useRef();
  const style = { marginBottom: '1.5rem' };
  const items = [
    {
      title: 'Guides',
      link: '/guides',
      children: [
        {
          title: 'Start new project',
          link: '/guides/start-new-project' // goes into @reach/router `router Link`
        },
        {
          title: 'Github Repository',
          url: 'https://github.com/oahtech/oah-ui' // goes directly into `href` attribute
        }
      ]
    },
    {
      title: 'Components',
      link: '/components',
      children: [
        {
          title: 'Navigation',
          group: true
        },
        {
          title: 'Menu',
          link: '/components/menu' // selected link
        }
      ]
    }
  ];
  return (
    <>
      <Row>
        <Col style={style} xs>
          <Button fullWidth onClick={() => menuRef.current.expandAll()}>
            expand All
          </Button>
        </Col>
        <Col style={style} xs>
          <Button fullWidth onClick={() => menuRef.current.collapseAll()}>
            collapse All
          </Button>
        </Col>
      </Row>
      <Menu
        ref={menuRef}
        style={{ maxWidth: '20rem', margin: '0 auto' }}
        items={items}
        Link={Link}
      />
    </>
  );
}

export default Ref;
