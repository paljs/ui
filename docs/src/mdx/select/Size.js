import React from 'react';
import { Select } from '../../../../src';

const options = [
  { label: 'Clean' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Size() {
  const style = { marginBottom: '1rem' };
  return (
    <div style={{ maxWidth: '16rem' }}>
      {['XS', 'SM', 'MD', 'LG'].map(size => (
        <Select key={size} style={style} size={size} options={options} placeholder={size} />
      ))}
    </div>
  );
}

export default Size;
