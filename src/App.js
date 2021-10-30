//Dependencies
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

//Stylesheets
import 'bootstrap/dist/css/bootstrap.css'
import "./index.css"

//Components
import NavigationBar from "./components/navbar"
import Footer from "./components/footer"

//Pages
import AddEntry from "./pages/addEntry"
import List from "./pages/list"
import Login from "./pages/login"
import Home from './pages/home'


function App() {
    return(
        <div>
            <Router>
                <NavigationBar></NavigationBar>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/list' component={List} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/addEntry' component={AddEntry} />
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}
export default App;