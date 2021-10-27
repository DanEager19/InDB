//Depndencies
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//Styles
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css"

//Components
import Navigation from "./components/navbar"
import Footer from "./components/footer";

//Pages
import add_entry from "./pages/add_entry"
import list from "./pages/list"
import login from "./pages/login"
import Home from './pages/home';

function App() {
    return(
            <div>
              <Router>
                  <Navigation></Navigation>
                  <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/list' component={list} />
                      <Route exact path='/login' component={login} />
                      <Route exact path='/add_entry' component={add_entry} />
                  </Switch>
              </Router>
              <Footer />
          </div>
    );
}

ReactDOM.render(
    <App />, 
  document.getElementById('root')
);