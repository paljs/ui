import React from 'react';
import { Card, CardBody, Menu, MenuItemType } from 'oah-ui';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

const getPathReady = (path: string) => {
  return path.endsWith('/') ? path.slice(0, -1) : path;
};

function Basic() {
  const items: MenuItemType[] = [
    {
      title: 'Getting Started',
      link: { to: '/getting-started' },
    },
    {
      title: 'Guides',
      children: [
        {
          title: 'Start new project',
          link: { to: '/guides/start-new-project' }, // goes into @reach/router `router Link`
        },
        {
          title: 'Github Repository',
          url: 'https://github.com/AhmedElywa/oah-ui', // goes directly into `href` attribute
        },
      ],
    },
    {
      title: 'Components',
      children: [
        {
          title: 'Navigation',
          group: true,
        },
        {
          title: 'Menu',
          link: { to: '/components/menu' }, // selected link
        },
      ],
    },
    {
      title: 'Themes',
      link: { to: '/themes' },
    },
  ];
  return (
    <Card style={{ maxWidth: '20rem', margin: '0 auto' }}>
      <CardBody>
        <Location>
          {({ location }) => <Menu currentPath={getPathReady(location.pathname)} items={items} Link={Link} />}
        </Location>
      </CardBody>
    </Card>
  );
}

export default Basic;
