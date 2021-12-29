import React, { useEffect, useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Info from "../pages/info";
import { BrowserRouter } from "react-router-dom";


export default function GenerateAllGames() {
    const [json, setJson] = useState([]);
    const getJSON = async () => {
        const response = await fetch('http://localhost:5000/games')
        const data = await response.json();
        setJson(data);
    };

    useEffect(() => {
       getJSON();
    }, []);
    return (
        <div>
            {
                json.map((item) => (
                    <BrowserRouter key={item.id}>
                        <ul>
                            <Link to={"/info/" + item.title}>{item.title}</Link>
                        </ul>
                        <Switch>
                            <Route path="/info/:title">
                                <Info/>
                            </Route>
                        </Switch>
                    </BrowserRouter>
                ))
            }
        </div>
    );
}