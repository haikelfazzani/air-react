import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dialog } from '../components/Dialog/index';
import { Button } from '../components/Button/index';

export default { title: 'Dialog', component: Dialog } as ComponentMeta<typeof Dialog>;

export const Alert: ComponentStory<typeof Dialog> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => { setIsOpen(!isOpen) }
  const handleConfirm = () => { alert('Yes button clicked'); }

  return <>
    <Button className="btn" onClick={handleClose}>Open Dialog</Button>
    {isOpen && <Dialog // all props are required
      options={{
        confirm: 'Yes', // button text for cancel btn
        btn: true // with or without buttons
      }}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      onConfirm={handleConfirm}
    >
      <h2>What is Lorem Ipsum?</h2>
      <p className='muted text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </Dialog>}
  </>
}

export const Confirm: ComponentStory<typeof Dialog> = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => { setIsOpen(!isOpen) }
  const handleConfirm = () => { alert('yes button clicked'); }
  const handleCancel = () => { alert('no button clicked'); }

  return <>
    <button onClick={handleClose}>Open Dialog</button>
    {isOpen && <Dialog // all props are required
      options={{
        confirm: 'Agree', // button text for cancel btn
        cancel: 'Disagree', // button text for cancel btn
        btn: true // with or without buttons
      }}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    >
      <h2>This is a confirm box?</h2>
      <p className='muted text-justify'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    </Dialog>}
  </>
}