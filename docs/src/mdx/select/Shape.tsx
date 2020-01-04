import React from 'react';
import { Select, SelectOption } from 'oah-ui';
import { shape } from '../shared';

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
      {shape.map(shape => (
        <Select key={shape} style={style} shape={shape} options={options} placeholder={shape} />
      ))}
    </div>
  );
}

export default Size;
