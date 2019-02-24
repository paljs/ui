import React from 'react';
import { Card, CardBody, User } from 'oah-ui';

function Image() {
  return (
    <>
      <Card>
        <header>User avatar image set as link</header>
        <CardBody>
          <User
            title="Manger"
            name="ahmed elywa"
            image="url('/icons/icon-72x72.png')"
          />
        </CardBody>
      </Card>
      <Card>
        <header>User avatar with custom background color</header>
        <CardBody>
          <User title="Manger" name="ahmed elywa" color="#eee" />
        </CardBody>
      </Card>
      <Card>
        <header>User avatar image not set and showInitials disabled</header>
        <CardBody>
          <User title="Manger" name="ahmed elywa" showInitials={false} />
        </CardBody>
      </Card>
    </>
  );
}

export default Image;
