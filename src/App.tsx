import React from 'react'
import TopPage from "./pages/TopPage";
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <TopPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
