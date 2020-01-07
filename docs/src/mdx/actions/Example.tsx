import { Card, Actions, CardBody, ActionType } from 'oah-ui';
import React from 'react';
import { Link } from 'gatsby';

const ActionsPage = () => {
  const items: ActionType[] = [
    {
      icon: 'home',
      disabled: true,
      badge: {
        status: 'Primary',
        title: '22',
        position: 'topStart',
      },
    },
    {
      icon: 'star-outline',
      badge: {
        status: 'Info',
        title: '55+',
        position: 'topStart',
      },
    },
    {
      icon: 'toggle-right-outline',
      badge: {
        status: 'Success',
        title: '34',
        position: 'topStart',
      },
    },
    {
      icon: 'browser-outline',
      link: { to: '/' },
      badge: {
        status: 'Danger',
        title: '34',
        position: 'topStart',
      },
    },
    {
      content: 'Action',
      badge: {
        status: 'Primary',
        title: '23',
        position: 'topStart',
      },
    },
  ];
  return (
    <>
      <Card>
        <CardBody>
          <Actions Link={Link} size="Large" actions={items} />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Actions Link={Link} size="Medium" actions={items} />
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <Actions fullWidth Link={Link} size="Small" actions={items} />
        </CardBody>
      </Card>
    </>
  );
};
export default ActionsPage;
