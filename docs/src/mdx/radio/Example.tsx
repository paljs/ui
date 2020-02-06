import React from 'react';
import { Card, CardBody, Radio } from 'oah-ui';

function Example() {
  const onChangeRadio = (_: any) => {
    // value will be item value
  };
  return (
    <Card>
      <header>Radio</header>
      <CardBody>
        <Radio
          name="radio"
          onChange={onChangeRadio}
          options={[
            {
              value: 'value 1',
              label: 'option 1',
              checked: true,
            },
            {
              value: 'value 2',
              label: 'option 2',
              status: 'Info',
            },
            {
              value: 'value 3',
              label: 'option 3',
              status: 'Danger',
            },
          ]}
        />
      </CardBody>
    </Card>
  );
}

export default Example;
