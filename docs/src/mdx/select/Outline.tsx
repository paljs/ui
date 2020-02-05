import React from 'react';
import { Select } from 'oah-ui';
import { status } from '../shared';
import styled from 'styled-components';

export const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
`;

const statusOption: { value: any, label: any }[] = [
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
        <SelectStyled
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
