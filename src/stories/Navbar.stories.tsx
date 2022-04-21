import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Navbar } from '../components/Navbar/index';

export default { title: 'Navbar', component: Navbar } as ComponentMeta<typeof Navbar>;

export const Simple: ComponentStory<typeof Navbar> = () => {
  const showAlert = () => { alert('Yes Navbar clicked'); }

  return <Navbar>Navbar</Navbar>
}
