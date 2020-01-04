import React from 'react';
import { Select, SelectOption } from '../../../../src';
import { size } from '../shared';

const options: SelectOption[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Size() {
  const style = { marginBottom: '1rem' };
  return (
    <div style={{ maxWidth: '16rem' }}>
      {size.map(size => (
        <Select key={size} style={style} size={size} options={options} placeholder={size} />
      ))}
    </div>
  );
}

export default Size;
