import React, { Suspense } from "react";
import './App.css';

import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Home from "./components/home/Home"
import Characters from "./components/characters/Characters"

function App() {
  return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="main">
            <div className="wrapper">
              <Suspense fallback={<div>Loading...</div>}>
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
        </div>
      </Router>
    </Provider>
  );
}

export default App;
