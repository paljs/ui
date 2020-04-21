import React, { useRef } from 'react';
import { Accordion, AccordionItem, Row, Col, Button, AccordionRefObject } from 'oah-ui';

export default function Ref() {
  const accordionRef = useRef<AccordionRefObject>(null);
  const style = { marginBottom: '1.5rem' };
  return (
    <>
      <Row>
        <Col style={style} breakPoint={{ xs: true }}>
          <Button fullWidth onClick={() => accordionRef.current?.openAll()}>
            openAll
          </Button>
        </Col>
        <Col style={style} breakPoint={{ xs: true }}>
          <Button fullWidth onClick={() => accordionRef.current?.closeAll()}>
            closeAll
          </Button>
        </Col>
        <Col style={style} breakPoint={{ xs: true }}>
          <Button fullWidth onClick={() => accordionRef.current?.open(1)}>
            open first
          </Button>
        </Col>
        <Col style={style} breakPoint={{ xs: true }}>
          <Button fullWidth onClick={() => accordionRef.current?.close(1)}>
            close first
          </Button>
        </Col>
        <Col style={style} breakPoint={{ xs: true }}>
          <Button fullWidth onClick={() => accordionRef.current?.toggle(1)}>
            toggle first
          </Button>
        </Col>
      </Row>
      <Accordion ref={accordionRef} disabled={[3]}>
        <AccordionItem uniqueKey={1} title="Head 1">
          An accordion allows to toggle the display of sections of content
        </AccordionItem>
        <AccordionItem uniqueKey={2} title="Head 2">
          An accordion allows to toggle the display of sections of content
        </AccordionItem>
        <AccordionItem uniqueKey={3} title="Head 3">
          An accordion allows to toggle the display of sections of content
        </AccordionItem>
      </Accordion>
    </>
  );
}
