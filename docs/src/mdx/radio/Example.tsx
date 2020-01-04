import React from 'react';
import { Radio } from 'oah-ui';

function Example() {
  const onChangeRadio = (_: any) => {
    // value will be item value
  };
  return (
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
  );
}

export default Example;
