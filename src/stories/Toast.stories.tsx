import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Toast } from '../components/Toast/index';

export default { title: 'Toast', component: Toast } as ComponentMeta<typeof Toast>;

export const Circle: ComponentStory<typeof Toast> = () => {
  return <div className='w-100 d-flex'>

  </div>
}
