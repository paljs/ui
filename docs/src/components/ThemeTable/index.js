import React, { useState } from 'react';
import { Card, InputGroup } from 'oah-ui';
import { Link } from 'gatsby';
import Table from '../StyleTable/style';
import { getTheme } from './themeData';
import { useChangeColor } from '../useChangeColor';

function ThemeTable(props) {
  const [search, setSearch] = useState('');
  useChangeColor('style-value');
  const getParent = v => {
    if (v.default && v.parent) {
      return (
        <Link to={`/themes/default#${v.parent}`}>{v.parent} (default)</Link>
      );
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
      <div className="card-body">
        <h2 style={{ textTransform: 'uppercase' }}>{props.theme}</h2>
        {props.theme !== 'default' && <p>inherited from default theme</p>}
        <InputGroup fullWidth label="search for">
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
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
            {getTheme(props.theme).map(v => {
              if (v.key.includes(search)) {
                return (
                  <tr key={v.key} id={v.key}>
                    <td>
                      <Link to={`/themes/${props.theme}#${v.key}`}>
                        {v.key}
                      </Link>
                    </td>
                    <td className="style-value">{v.value}</td>
                    <td>{getParent(v)}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </Table>
      </div>
    </Card>
  );
}

export default ThemeTable;
