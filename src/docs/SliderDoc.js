import React from 'react';
import Slider from '../lib/components/slider/index'

import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'

export default function SliderDoc () {
  const code = `function App() {
    
  const [status, seStatus] = React.useState(false);
    
  return <>
    <Slider 
      onChangeEnd={(value) => seStatus(value)}
      onChange={(value) => seStatus(value)}
      direction="horizontal"
      defaultValue={0}
      min={0}
      max={100}
      color="#3182ce"
    />

    <p>{status}</p>
  </>
}

render(<App />)`;

  return (<div className="doc">
    <h1>Slider</h1>
    <p>The Slider component is used as an alternative for the Checkbox component. You can switch between enabled or disabled states.</p>

    <h3>Import</h3>
    <pre>import &#123; Slider &#125; from "air-react</pre>

    <h3>Usage</h3>
    <pre>{code}</pre>

    <h3>Playground</h3>
    <LiveProvider code={code} bindings={{Slider}}>
      <div className="w-100 d-flex editor">
        <LiveEditor />
        <LivePreview />
      </div>
    </LiveProvider>
  </div>);
}