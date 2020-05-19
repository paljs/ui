import React from 'react';
import { Card, CardBody, Select } from 'oah-ui';
import { status } from '../shared';
import styled from 'styled-components';

export const SelectStyled = styled(Select)`
  margin-bottom: 1rem;
  max-width: 16rem;
`;

const statusOption: { value: any; label: any }[] = [
  { label: 'Clean', value: '' },
  { value: 'Info', label: 'Info' },
  { value: 'Success', label: 'Success' },
  { value: 'Danger', label: 'Danger' },
  { value: 'Primary', label: 'Primary' },
];

function Outline() {
  return (
    <Card>
      <header>Status</header>
      <CardBody>
        {status.map((state) => (
          <SelectStyled key={state} appearance="outline" status={state} options={statusOption} placeholder={state} />
        ))}
      </CardBody>
    </Card>
  );
}

export default Outline;
