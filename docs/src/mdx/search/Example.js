import { Row, Col, Card, CardBody, Search } from 'oah-ui';
import React, { useState } from 'react';

export default function SearchPage() {
  const [value, setValue] = useState('');
  const submitHandle = sentValue => setValue(sentValue);
  return (
    <Row>
      {[
        'rotate-layout',
        'modal-zoomin',
        'modal-move',
        'modal-drop',
        'modal-half',
        'curtain',
        'column-curtain'
      ].map(key => (
        <Col xs={12} md={6} key={key}>
          <Card>
            <header>{key} Search</header>
            <CardBody>
              <Search
                submit={v => submitHandle(v)}
                type={key}
                placeholder="Search..."
                hint="Hit Enter to search"
              />
            </CardBody>
            <footer>You Search for: {value}</footer>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
