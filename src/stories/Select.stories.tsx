import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Select } from '../components/Select/index';

export default { title: 'Select', component: Select } as ComponentMeta<typeof Select>;

export const Simple: ComponentStory<typeof Select> = () => {
  const showAlert = () => { alert('Yes Select clicked'); }

  return <Select className="btn" onClick={showAlert}>Select</Select>
}
