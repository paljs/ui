import React from 'react';
import { Select } from 'oah-ui';

const positionOptions: { value: any, label: any }[] = [
  { value: 'topRight', label: 'Top-Right' },
  { value: 'topLeft', label: 'Top-Left' },
  { value: 'bottomRight', label: 'Bottom-Right' },
  { value: 'bottomLeft', label: 'Bottom-Left' },
];
const statusOption: { value: any, label: any }[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Example() {
  return (
    <>
      <h4>Normal Select with Clean label just pass option with no value</h4>
      <Select options={statusOption} placeholder="Status" />

      <h4>multiple Select</h4>
      <Select options={positionOptions} isMulti placeholder="Select multiple" />
    </>
  );
}

export default Example;
