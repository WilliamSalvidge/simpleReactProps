import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Results from "./components/ResultsProps";

function App() {
  const initialState = {
    buttonA: false,
    buttonB: false,
    buttonC: false,
    buttonD: false
  };

  const [checked, setChecked] =
    useState(initialState);

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <main>
          <div className="display-flex-ai-jc heading-banner">
            <h1>Hello World</h1>
          </div>
          <Switch>
            <Route exact path="/">
              <Form
                checked={checked}
                setChecked={setChecked}
              />
            </Route>
            <Route exact path="/results">
              <Results
                checked={checked}
                setChecked={setChecked}
              />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector("#app")
);

/* code below makes so that browser does not
even reloaded the webpage.
It just loads the new javascript on the fly. 
*/

if (module.hot) {
  module.hot.accept();
}
