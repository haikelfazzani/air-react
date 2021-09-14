import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import Home from "./pages/Home";

const routes = [
  { path: '', comp: Home },
  { path: 'modal', comp: lazy(() => import("./docs/ModalDoc")) },
  { path: 'button', comp: lazy(() => import("./docs/ButtonDoc")) },
  { path: 'switch', comp: lazy(() => import("./docs/SwitchDoc")) },
  { path: 'tabs', comp: lazy(() => import("./docs/TabsDoc")) },
  { path: 'dropmenu', comp: lazy(() => import("./docs/DropmenuDoc")) },
  { path: 'slider', comp: lazy(() => import("./docs/SliderDoc")) },
  { path: 'spinner', comp: lazy(() => import("./docs/SpinnerDoc")) },
  { path: 'input', comp: lazy(() => import("./docs/InputDoc")) },
  { path: 'badge', comp: lazy(() => import("./docs/BadgeDoc")) }
];

routes.sort((a,b) => a.path.localeCompare(b.path))

function App () {
  return (<BrowserRouter>
    <main>
      <aside>
        <ul>
          {routes.map((route, i) => <li key={i}><Link to={"/" + route.path}>{route.path || 'Home'}</Link></li>)}
        </ul>
      </aside>

      <div className="content">
        <Suspense fallback={<div>...</div>}>
          <Switch>
            {routes.map((route, i) => <Route key={i} exact path={'/' + route.path} component={route.comp} />)}
            <Redirect path="*" to="/" />
          </Switch>
        </Suspense>
      </div>
    </main>
  </BrowserRouter>);
}

export default App;
