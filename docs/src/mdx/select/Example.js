import React from 'react';
import { Select } from '../../../../src';

const positionOptions = [
  { value: 'topRight', label: 'Top-Right' },
  { value: 'topLeft', label: 'Top-Left' },
  { value: 'bottomRight', label: 'Bottom-Right' },
  { value: 'bottomLeft', label: 'Bottom-Left' },
];
const statusOption = [
  { label: 'Clean' },
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
      <Select options={positionOptions} multiple placeholder="Select multiple" />
    </>
  );
}

export default Example;
