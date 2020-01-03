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
      {['Rectangle', 'SemiRound', 'Round'].map(shape => (
        <Select key={shape} style={style} shape={shape} options={options} placeholder={shape} />
      ))}
    </div>
  );
}

export default Size;
