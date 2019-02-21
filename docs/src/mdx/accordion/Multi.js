import React from 'react';
import { Accordion, AccordionItem } from 'oah-ui';

export default function Multi() {
  return (
    <Accordion multi>
      <AccordionItem title="Head 1">
        An accordion allows to toggle the display of sections of content
      </AccordionItem>
      <AccordionItem title="Head 2">
        An accordion allows to toggle the display of sections of content
      </AccordionItem>
      <AccordionItem title="Head 3">
        An accordion allows to toggle the display of sections of content
      </AccordionItem>
    </Accordion>
  );
}
