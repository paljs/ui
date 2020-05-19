import React from 'react';
import { shape } from '../shared';
import { SelectStyled } from './Outline';
import { Card, CardBody } from 'oah-ui';

const options: { value: any; label: any }[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Size() {
  return (
    <Card>
      <header>Shape</header>
      <CardBody>
        {shape.map((shape) => (
          <SelectStyled key={shape} shape={shape} options={options} placeholder={shape} />
        ))}
      </CardBody>
    </Card>
  );
}

export default Size;
