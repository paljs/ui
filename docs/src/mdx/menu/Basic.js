import React from 'react';
import { Menu } from 'oah-ui';
import { Link } from 'gatsby';

function Basic() {
  const items = [
    {
      title: 'Getting Started',
      link: '/getting-started'
    },
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
    },
    {
      title: 'Themes',
      link: '/themes'
    }
  ];
  return (
    <Menu
      style={{ maxWidth: '20rem', margin: '0 auto' }}
      items={items}
      Link={Link}
    />
  );
}

export default Basic;
