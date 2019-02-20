import React from 'react';
import { Card } from 'oah-ui';
import Table from './StyleTable/style';

function ApiTable(props) {
  return (
    <Card>
      <div className="card-body">
        <h2 style={{ textTransform: 'uppercase' }}>{props.name}</h2>
        <h3>Props</h3>
        <p>{props.hint}</p>
        <Table className="striped">
          <thead>
            <tr>
              <td>Name</td>
              <td>Type</td>
              <td>Description</td>
            </tr>
          </thead>
          <tbody>
            {props.props.map(v => (
              <tr key={v.name}>
                <td>{v.name}</td>
                <td>{v.type}</td>
                <td>{v.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {props.methods && (
          <>
            <h3>Methods</h3>
            <Table className="striped">
              <thead>
                <tr>
                  <td>Name</td>
                  <td>Type</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {props.methods.map(v => (
                  <tr key={v.name}>
                    <td>{v.name}</td>
                    <td>{v.type}</td>
                    <td>{v.description}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </div>
    </Card>
  );
}

export default ApiTable;
