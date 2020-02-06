import React from 'react';
import { Card, Select, CardBody } from 'oah-ui';

const positionOptions: { value: any; label: any }[] = [
  { value: 'topRight', label: 'Top-Right' },
  { value: 'topLeft', label: 'Top-Left' },
  { value: 'bottomRight', label: 'Bottom-Right' },
  { value: 'bottomLeft', label: 'Bottom-Left' },
];
const statusOption: { value: any; label: any }[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Example() {
  return (
    <>
      <Card size="Small">
        <header>Normal Select with Clean label just pass option with no value</header>
        <CardBody>
          <Select options={statusOption} placeholder="Status" />
        </CardBody>
      </Card>
      <Card size="Small">
        <header>multiple Select</header>
        <CardBody>
          <Select options={positionOptions} isMulti placeholder="Select multiple" />
        </CardBody>
      </Card>
    </>
  );
}

export default Example;
