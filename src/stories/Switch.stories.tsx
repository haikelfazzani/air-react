import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from '../components/Switch/index';

export default { title: 'Switch', component: Switch } as ComponentMeta<typeof Switch>;

export const Simple: ComponentStory<typeof Switch> = () => {
  const showAlert = () => { alert('Yes Switch clicked'); }

  return <Switch className="btn" onClick={showAlert}>Switch</Switch>
}
