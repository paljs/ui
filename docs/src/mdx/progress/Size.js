import React from 'react';
import { Card, CardBody, Progress } from '../../../../src';

function Size() {
  const style = { marginBottom: '1rem' };
  return (
    <Card>
      <header>Progress Bar Size</header>
      <CardBody>
        {['XS', 'SM', 'MD', 'LG', 'XL'].map((key, index) => (
          <Progress key={key} style={style} value={(index + 1) * 20} size={key}>
            {key}
          </Progress>
        ))}
      </CardBody>
    </Card>
  );
}

export default Size;
