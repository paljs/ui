import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/chat/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { chatProps, messagesProps, fromProps } from '../../mdx/chat/ApiArray';

export default function ChatPage() {
  return (
    <Row>
      <SEO title="Chat Component" keywords={['OAH', 'application', 'react']} />
      <Col xs={12}>
        <Switch title="Chat Component">
          <Overview />
          <>
            <ApiTable name="Chat" props={chatProps} />
            <ApiTable name="ChatMessages" props={messagesProps} />
            <ApiTable name="ChatForm" props={fromProps} />
          </>
          <StyleTable keys={['chat']} />
        </Switch>
      </Col>
    </Row>
  );
}
