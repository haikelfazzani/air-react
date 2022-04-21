import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from '../components/Accordion/index';

export default { title: 'Accordion', component: Accordion } as ComponentMeta<typeof Accordion>;

export const Simple: ComponentStory<typeof Accordion> = () => {
  const showAlert = () => { alert('Yes Accordion clicked'); }

  return <Accordion className="btn" onClick={showAlert}>Accordion</Accordion>
}
