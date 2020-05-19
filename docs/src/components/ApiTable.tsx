import React from 'react';
import { Card, CardBody } from 'oah-ui';
import Table from './StyleTable/style';

interface Props {
  name: string;
  type: string;
  description: string;
}

interface ApiTableProps {
  name: string;
  hint?: string;
  props: Props[];
  methods?: Props[];
}

const ApiTable: React.FC<ApiTableProps> = (props) => {
  return (
    <Card>
      <CardBody>
        <h2>{props.name}</h2>
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
            {props.props.map((v) => (
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
                {props.methods.map((v) => (
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
      </CardBody>
    </Card>
  );
};

export default ApiTable;
