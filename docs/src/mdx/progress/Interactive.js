import React, { useState, useEffect } from 'react';
import { Card, CardBody, Actions, Progress } from '../../../../src';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  .bar {
    flex: 1;
  }
`;
function Interactive() {
  const [value, setValue] = useState(25);
  const [status, setStatus] = useState('Danger');

  useEffect(() => {
    if (value <= 25) {
      setStatus('Danger');
    } else if (value <= 50) {
      setStatus('Warning');
    } else if (value <= 75) {
      setStatus('Info');
    } else {
      setStatus('Success');
    }
  }, [value]);

  const setProgressValue = newValue => {
    setValue(Math.min(Math.max(newValue, 0), 100));
  };
  return (
    <Card>
      <header>Progress Bar Interactive</header>
      <CardBody>
        <Container>
          <Actions
            size="MD"
            actions={[
              {
                icon: 'icon ion-ios-arrow-down',
                events: { onClick: () => setProgressValue(value - 25) },
              },
            ]}
          />
          <Progress className="bar" value={value} status={status} displayValue />
          <Actions
            size="MD"
            actions={[
              {
                icon: 'icon ion-ios-arrow-up',
                events: { onClick: () => setProgressValue(value + 25) },
              },
            ]}
          />
        </Container>
      </CardBody>
    </Card>
  );
}

export default Interactive;
