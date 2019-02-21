import React from 'react';
import { Card, CardBody, FlipCard } from 'oah-ui';

export default function Colored() {
  return (
    <>
      <FlipCard button="bottom">
        <Card status="Success">
          <header>Front</header>
          <CardBody>Card basic content container component.</CardBody>
        </Card>
        <Card status="Primary">
          <header>Back</header>
          <CardBody>Card basic content container component.</CardBody>
        </Card>
      </FlipCard>
      <FlipCard>
        <Card accent="Info">
          <header>Front</header>
          <CardBody>Card basic content container component.</CardBody>
        </Card>
        <Card accent="Warning">
          <header>Back</header>
          <CardBody>Card basic content container component.</CardBody>
        </Card>
      </FlipCard>
    </>
  );
}
