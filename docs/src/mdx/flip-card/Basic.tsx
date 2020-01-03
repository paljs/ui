import React from 'react';
import { Card, CardBody, FlipCard } from '../../../../src';

export default function Basic() {
  return (
    <FlipCard>
      <Card>
        <header>Front</header>
        <CardBody>Card basic content container component.</CardBody>
        <footer>Footer</footer>
      </Card>
      <Card>
        <header>Back</header>
        <CardBody>Card basic content container component.</CardBody>
        <footer>Footer</footer>
      </Card>
    </FlipCard>
  );
}
