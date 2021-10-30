//Dependencies
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"

//Components
import Navigation from "./components/navbar"
import Footer from "./components/footer"

//Pages
import addEntry from "./pages/addEntry"
import list from "./pages/list"
import login from "./pages/login"
import home from './pages/home'

function App() {
    return(
        <div>
            <Router>
                <Navigation></Navigation>
                <Switch>
                    <Route exact path='/' component={home} />
                    <Route exact path='/list' component={list} />
                    <Route exact path='/login' component={login} />
                    <Route exact path='/addEntry' component={addEntry} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}
export default App;