//Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"

//Components
import Navigation from "./components/navbar"
import Footer from "./components/footer"

//Pages
import Add_entry from "./pages/add_entry"
import List from "./pages/list"
import Login from "./pages/login"
import Home from './pages/home'

function App() {
    return(
        <div>
            <Router>
                <Navigation></Navigation>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/list' component={List} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/add_entry' component={Add_entry} />
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