import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from "./components/navbar"
import add_entry from "./pages/add_entry"
import list from "./pages/list"
import login from "./pages/login"
import info from "./pages/info"

function App() {
    return(
        <nav>
            <div>
              <Router>
                  <Navbar />
                  <Switch>
                      <Route path='/' exact component={info} />
                      <Route path='/list' component={list} />
                      <Route path='/login' component={login} />
                      <Route path='/add_entry' component={add_entry} />
                  </Switch>
              </Router>
          </div>
        </nav>
    );
}

ReactDOM.render(
    App, 
  document.getElementById('root')
);