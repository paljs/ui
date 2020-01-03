import React from 'react';
import { Card, CardBody } from '../../../../src';
import { createTheme } from '../../../../src';
import Table from './style';
import { DefaultTheme } from 'styled-components';

const StyleTable: React.FC<{ keys: string[] }> = ({ keys }) => {
  const theme = createTheme('default');

  const getColor = (value: string) => {
    value = value.replace(/(#[a-f0-9]{6}|rgba.*?\))/gi, '$&<span class="color-swatch" style="background: $&"/>');
    return value.replace(/,/g, ', ');
  };

  return keys.map(key => (
    <Card key={key}>
      <CardBody>
        <h2 style={{ textTransform: 'uppercase' }}>{key}</h2>
        <Table className="striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Default</td>
              <td>Cosmic</td>
              <td>Corporate</td>
            </tr>
          </thead>
          <tbody>
            {(Object.keys(theme) as Array<keyof DefaultTheme>).map(key2 => {
              if (key2.startsWith(key)) {
                return (
                  <tr key={key2}>
                    <td>{key2}</td>
                    <td dangerouslySetInnerHTML={{ __html: getColor(createTheme('default')[key2] as string) }} />
                    <td dangerouslySetInnerHTML={{ __html: getColor(createTheme('cosmic')[key2] as string) }} />
                    <td dangerouslySetInnerHTML={{ __html: getColor(createTheme('corporate')[key2] as string) }} />
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  ));
};

export default StyleTable;
