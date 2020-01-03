import React from 'react';
import { Select } from '../../../../src';

const statusOption = [
  { label: 'Clean' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Outline() {
  const style = { marginBottom: '1rem' };
  return (
    <div style={{ maxWidth: '16rem' }}>
      {['Info', 'Success', 'Danger', 'Primary', 'Warning'].map(state => (
        <Select key={state} style={style} outline status={state} options={statusOption} placeholder={state} />
      ))}
    </div>
  );
}

export default Outline;
