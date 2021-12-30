//Dependencies
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Stylesheets
import 'bootstrap/dist/css/bootstrap.css'
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
                    <Route exact path='/createEntry' component={Create} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}
export default App;