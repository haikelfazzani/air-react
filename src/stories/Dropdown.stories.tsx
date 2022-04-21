import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropdown } from '../components/Dropdown/index';

export default { title: 'Dropdown', component: Dropdown } as ComponentMeta<typeof Dropdown>;

export const Simple: ComponentStory<typeof Dropdown> = () => {
  const showAlert = () => { alert('Yes Dropdown clicked'); }

  return <Dropdown className="btn" onClick={showAlert}>Dropdown</Dropdown>
}
