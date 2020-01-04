import React from 'react';
import { Card, CardBody, User } from 'oah-ui';
import { size } from '../shared';

function Size() {
  return size.map(key => (
    <Card key={key}>
      <CardBody>
        <User title="Manger" name="ahmed elywa" size={key} />
      </CardBody>
    </Card>
  ));
}

export default Size;
