import React from 'react';
import { Card, CardBody, Progress } from 'oah-ui';
import { size } from '../shared';

function Size() {
  const style = { marginBottom: '1rem' };
  return (
    <Card>
      <header>Progress Bar Size</header>
      <CardBody>
        {size.map((key, index) => (
          <Progress key={key} style={style} value={(index + 1) * 20} size={key}>
            {key}
          </Progress>
        ))}
      </CardBody>
    </Card>
  );
}

export default Size;
