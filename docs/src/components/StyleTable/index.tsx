import React from 'react';
import { withTheme, DefaultTheme } from 'styled-components';
import { Card, CardBody } from 'oah-ui';
import Table from './style';
import { getTheme } from '../ThemeTable/themeData';

const StyleTable: React.FC<{ keys: string[]; theme: DefaultTheme }> = ({ keys, theme }) => {
  const getColor = (value: string) => {
    if (value) {
      value = value
        .toString()
        .replace(/(#[a-f0-9]{6}|rgba.*?\))/gi, '$&<span class="color-swatch" style="background: $&"/>');
      return value.replace(/,/g, ', ');
    }
    return '';
  };

  return (
    <>
      {keys.map((key) => (
        <Card key={key}>
          <CardBody>
            <h2 style={{ textTransform: 'uppercase' }}>{key}</h2>
            <Table className="striped">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Theme Variable</td>
                  <td>Default Value</td>
                </tr>
              </thead>
              <tbody>
                {getTheme(theme.name, key).map((v) => {
                  return (
                    <tr key={v.key}>
                      <td>{v.key}</td>
                      <td>{v.parent}</td>
                      <td dangerouslySetInnerHTML={{ __html: getColor(v.value) }} />
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      ))}
    </>
  );
};

export default withTheme(StyleTable);
