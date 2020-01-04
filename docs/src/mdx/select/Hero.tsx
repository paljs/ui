import React from 'react';
import { Select, SelectOption } from '../../../../src';
import { status } from '../shared';

const options: SelectOption[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Example() {
  const style = { marginBottom: '1rem' };
  return (
    <div style={{ maxWidth: '16rem' }}>
      {status.map(state => (
        <Select key={state} style={style} appearance="hero" status={state} options={options} placeholder={state} />
      ))}
    </div>
  );
}

export default Example;
