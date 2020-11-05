import React, { Suspense } from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import loader from './assets/images/loader.svg';
import Header from "./components/header/Header";
const Home = React.lazy(() => import('./components/home/Home'));
const Characters = React.lazy(() => import('./components/characters/Characters'));


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <Suspense fallback={<img src={loader} alt="Loading..." />}>
              <Switch>
                <Route path="/listing">
                  <Characters />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Suspense>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
