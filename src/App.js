import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import ButtonDoc from "./docs/ButtonDoc";

const ModalDoc = lazy(() => import("./docs/ModalDoc"));
const SwitchDoc = lazy(() => import("./docs/SwitchDoc"));
const NavbarDoc = lazy(() => import("./docs/NavbarDoc"));

function App () {
  return (<BrowserRouter>
    <main>
      <aside>
        <ul>
          <li><Link to="/">Button</Link></li>
          <li><Link to="/modal">Modal</Link></li>
          <li><Link to="/switch">switch</Link></li>
          {/* <li><Link to="/navbar">navbar</Link></li> */}
        </ul>
      </aside>

      <div className="content">
        <Suspense fallback={<div>...</div>}>
          <Switch>
            <Route exact path="/" component={ButtonDoc} />
            <Route path="/modal" component={ModalDoc} />
            <Route path="/switch" component={SwitchDoc} />
            <Route path="/navbar" component={NavbarDoc} />
            <Redirect path="*" to="/" />
          </Switch>
        </Suspense>
      </div>
    </main>
  </BrowserRouter>);
}

export default App;
