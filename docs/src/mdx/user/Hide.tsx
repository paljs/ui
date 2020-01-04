import React from 'react';
import { Card, CardBody, User } from 'oah-ui';

function Hide() {
  return (
    <>
      <Card>
        <header>only Picture</header>
        <CardBody>
          <User title="Manger" name="ahmed elywa" onlyPicture />
        </CardBody>
      </Card>
      <Card>
        <header>hide title</header>
        <CardBody>
          <User name="ahmed elywa" />
        </CardBody>
      </Card>
      <Card>
        <header>hide name</header>
        <CardBody>
          <User title="Manger" />
        </CardBody>
      </Card>
    </>
  );
}

export default Hide;
