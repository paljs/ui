import React from 'react';
import { Select } from '../../../../src';

const options = [
  { label: 'Clean' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Example() {
  const style = { marginBottom: '1rem' };
  return (
    <div style={{ maxWidth: '16rem' }}>
      {['Info', 'Success', 'Danger', 'Primary', 'Warning'].map(state => (
        <Select key={state} style={style} hero status={state} options={options} placeholder={state} />
      ))}
    </div>
  );
}

export default Example;
