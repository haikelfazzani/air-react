import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from '../components/Input/index';

export default { title: 'Input', component: Input } as ComponentMeta<typeof Input>;

export const Simple: ComponentStory<typeof Input> = () => {
  return <div>
    <label>Enter username</label>
    <Input type="text" />
  </div>
}
