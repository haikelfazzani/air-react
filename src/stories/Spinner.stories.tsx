import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Spinner } from '../components/Spinner/index';

export default { title: 'Spinner', component: Spinner } as ComponentMeta<typeof Spinner>;

export const Simple: ComponentStory<typeof Spinner> = () => {
  const showAlert = () => { alert('Yes Spinner clicked'); }

  return <Spinner className="btn" onClick={showAlert}>Spinner</Spinner>
}
