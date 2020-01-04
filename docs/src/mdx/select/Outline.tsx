import React from 'react';
import { Select, SelectOption } from 'oah-ui';
import { status } from '../shared';

const statusOption: SelectOption[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Outline() {
  const style = { marginBottom: '1rem' };
  return (
    <div style={{ maxWidth: '16rem' }}>
      {status.map(state => (
        <Select
          key={state}
          style={style}
          appearance="outline"
          status={state}
          options={statusOption}
          placeholder={state}
        />
      ))}
    </div>
  );
}

export default Outline;
