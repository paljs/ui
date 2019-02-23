import React from 'react';
import { Card, CardBody } from 'oah-ui';
import { themes } from 'oah-ui/theme';
import Table from './style';
import { useChangeColor } from '../useChangeColor';
/* eslint-disable */
function StyleTable({ keys }) {
  useChangeColor('style-value');
  const theme = themes('default');

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
            {Object.keys(theme).map(key2 => {
              if (key2.startsWith(key)) {
                return (
                  <tr key={key2}>
                    <td>{key2}</td>
                    <td className="style-value">{themes('default')[key2]}</td>
                    <td className="style-value">{themes('cosmic')[key2]}</td>
                    <td className="style-value">{themes('corporate')[key2]}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  ));
}

export default StyleTable;
