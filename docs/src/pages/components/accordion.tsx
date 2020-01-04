import React from 'react';
import { Row, Col } from '../../../../src';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/accordion/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { accordionProps, accordionMethod, accordionItemProps } from '../../mdx/accordion/ApiArray';

export default function AccordionPage() {
  return (
    <Row>
      <SEO title="Accordion Components" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="Accordion Components">
          <Overview />
          <>
            <ApiTable name="Accordion" props={accordionProps} methods={accordionMethod} />
            <ApiTable name="AccordionItem" props={accordionItemProps} />
          </>
          <StyleTable keys={['accordion']} />
        </Switch>
      </Col>
    </Row>
  );
}
