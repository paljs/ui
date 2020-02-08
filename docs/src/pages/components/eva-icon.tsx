import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/eva-icon/overview.md';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { animationOption, evaIconOptions, iconProps } from '../../mdx/eva-icon/ApiArray';

export default function EvaIconPage() {
  return (
    <Row>
      <SEO title="EvaIcon Component" />
      <Col breakPoint={{ xs: 12 }}>
        <Switch title="EvaIcon Component">
          <Overview />
          <>
            <ApiTable name="EvaIcon" props={iconProps} />
            <ApiTable name="EvaIconOptions" props={evaIconOptions} />
            <ApiTable name="AnimationOption" props={animationOption} />
          </>
          <StyleTable keys={['icon']} />
        </Switch>
      </Col>
    </Row>
  );
}
