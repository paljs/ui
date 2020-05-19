import React, { useState } from 'react';
import { DefaultTheme } from 'styled-components';
import { Card, CardBody, InputGroup } from 'oah-ui';
import { Link } from 'gatsby';
import Table from '../StyleTable/style';
import { getTheme, ReturnThemeData } from './themeData';

const ThemeTable: React.FC<{ theme: DefaultTheme['name'] }> = (props) => {
  const [search, setSearch] = useState('');

  const getColor = (value: string) => {
    value = value
      .toString()
      .replace(/(#[a-f0-9]{6}|rgba.*?\))/gi, '$&<span class="color-swatch" style="background: $&"/>');
    return value.replace(/,/g, ', ');
  };

  const getParent = (v: ReturnThemeData) => {
    if (v.default && v.parent) {
      return <Link to={`/themes/default#${v.parent}`}>{v.parent} (default)</Link>;
    } else if (v.default) {
      return <Link to={`/themes/default#${v.key}`}>{v.key} (default)</Link>;
    } else if (v.parent) {
      return <Link to={`/themes/${props.theme}#${v.parent}`}>{v.parent}</Link>;
    } else {
      return '';
    }
  };

  return (
    <Card>
      <CardBody>
        <h2 style={{ textTransform: 'uppercase' }}>{props.theme}</h2>
        {props.theme !== 'default' && <p>inherited from default theme</p>}
        <InputGroup fullWidth>
          <input placeholder="search for" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
        </InputGroup>
        <Table className="striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Value</td>
              <td>Parent</td>
            </tr>
          </thead>
          <tbody>
            {getTheme(props.theme).map((v) => {
              if (v.key.includes(search)) {
                return (
                  <tr key={v.key} id={v.key}>
                    <td>
                      <Link to={`/themes/${props.theme}#${v.key}`}>{v.key}</Link>
                    </td>
                    <td dangerouslySetInnerHTML={{ __html: getColor(v.value as string) }} />
                    <td>{getParent(v)}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ThemeTable;
