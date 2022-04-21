import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from '../components/Slider/index';

export default { title: 'Slider', component: Slider } as ComponentMeta<typeof Slider>;

export const Simple: ComponentStory<typeof Slider> = () => {
  const showAlert = () => { alert('Yes Slider clicked'); }

  return <Slider className="btn" onClick={showAlert}>Slider</Slider>
}
