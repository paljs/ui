import React, { useState } from 'react';
import { Card, Spinner, Tabs, Tab } from 'oah-ui';

function TabTest() {
  const [showTab, setShowTab] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const onSelect = (i: number) => {
    setShowTab(true);
    setActiveTab(i);
    setTimeout(() => {
      setShowTab(false);
    }, 3000);
  };
  return (
    <Card>
      <Tabs activeIndex={activeTab} fullWidth onSelect={i => onSelect(i)}>
        <Tab title="Tab 1">
          <div style={{ position: 'relative' }}>
            <h1>Content 1</h1>
            {showTab && <Spinner size="Large" status="Danger" />}
          </div>
        </Tab>
        <Tab title="Tab 2">
          <div style={{ position: 'relative' }}>
            <h1>Content 2</h1>
            {showTab && <Spinner size="Large" status="Danger" />}
          </div>
        </Tab>
        <Tab title="Tab 3">
          <div style={{ position: 'relative' }}>
            <h1>Content 3</h1>
            {showTab && <Spinner size="Large" status="Danger" />}
          </div>
        </Tab>
      </Tabs>
    </Card>
  );
}

export default TabTest;
