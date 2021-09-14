import React from 'react';
import { LiveProvider, LiveEditor, LivePreview } from 'live-reacto'
import { Slider } from '../lib/components/index'
import 'prismjs/themes/prism-coy.css'

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
    <p>The Slider is used to allow users to make selections from a range of values.</p>

    <h3># Import</h3>
    <LiveProvider code={`import { Slider } from "air-react`} onlyHighlight={true} readOnly={true}>
      <LiveEditor />
    </LiveProvider>

    <h3># Usage</h3>
    <LiveProvider code={code} bindings={{ Slider }}>
      <div className="w-100 d-flex editor"><LiveEditor /><LivePreview /></div>
    </LiveProvider>
  </div>);
}