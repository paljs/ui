import React from 'react';
import { shape } from '../shared';
import { SelectStyled } from "./Outline";

const options: { value: any, label: any }[] = [
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
        <SelectStyled key={shape} style={style} shape={shape} options={options} placeholder={shape} />
      ))}
    </div>
  );
}

export default Size;
