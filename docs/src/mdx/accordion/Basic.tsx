import React from 'react';
import { Accordion, AccordionItem } from 'oah-ui';

export default function Basic() {
  return (
    <Accordion>
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
  );
}
