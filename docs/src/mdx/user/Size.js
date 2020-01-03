import React from 'react';
import { Card, CardBody, User } from '../../../../src';

function Size() {
  return ['SM', 'MD', 'LG', 'XL'].map(key => (
    <Card key={key}>
      <CardBody>
        <User title="Manger" name="ahmed elywa" size={key} />
      </CardBody>
    </Card>
  ));
}

export default Size;
