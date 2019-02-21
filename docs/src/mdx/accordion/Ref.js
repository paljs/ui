import React, { useRef } from 'react';
import { Accordion, AccordionItem, Row, Col, Button } from 'oah-ui';

export default function Ref() {
  const accordionRef = useRef();
  const style = { marginBottom: '1.5rem' };
  return (
    <>
      <Row>
        <Col style={style} xs>
          <Button fullWidth onClick={() => accordionRef.current.openAll()}>
            openAll
          </Button>
        </Col>
        <Col style={style} xs>
          <Button fullWidth onClick={() => accordionRef.current.closeAll()}>
            closeAll
          </Button>
        </Col>
        <Col style={style} xs>
          <Button fullWidth onClick={() => accordionRef.current.open(0)}>
            open first
          </Button>
        </Col>
        <Col style={style} xs>
          <Button fullWidth onClick={() => accordionRef.current.close(0)}>
            close first
          </Button>
        </Col>
        <Col style={style} xs>
          <Button fullWidth onClick={() => accordionRef.current.toggle(0)}>
            toggle first
          </Button>
        </Col>
      </Row>
      <Accordion ref={accordionRef}>
        <AccordionItem title="Head 1">
          An accordion allows to toggle the display of sections of content
        </AccordionItem>
        <AccordionItem title="Head 2">
          An accordion allows to toggle the display of sections of content
        </AccordionItem>
        <AccordionItem title="Head 3" disabled>
          An accordion allows to toggle the display of sections of content
        </AccordionItem>
      </Accordion>
    </>
  );
}
