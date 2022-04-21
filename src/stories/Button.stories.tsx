import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from '../components/Button/index';

export default { title: 'Button', component: Button } as ComponentMeta<typeof Button>;

export const Simple: ComponentStory<typeof Button> = () => {
  const showAlert = () => { alert('Yes button clicked'); }

  return <Button className="btn" onClick={showAlert}>Button</Button>
}
