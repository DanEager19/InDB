//Dependencies
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import "./styles.scss"

//Components
import NavigationBar from "./components/navbar"
import Footer from "./components/footer"

//Pages
import Create from "./pages/create"
import List from "./pages/list"
import Login from "./pages/login"
import Home from './pages/home'
import Info from './pages/info'
import About from './pages/about'
import Update from './pages/update'

function App() {
    return(
        <div>
            <Router>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/info/:title' component={Info} />
                    <Route exact path='/list' component={List} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/create' component={Create} />
                    <Route exact path='/info/update/:title' component={Update} />
                    <Route exact path='/about' component={About}/>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App