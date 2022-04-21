import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs } from '../components/Tabs/index';

export default { title: 'Tabs', component: Tabs } as ComponentMeta<typeof Tabs>;

export const Simple: ComponentStory<typeof Tabs> = () => {
  const showAlert = () => { alert('Yes Tabs clicked'); }

  return <Tabs>Tabs</Tabs>
}
