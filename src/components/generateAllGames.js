import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div className="flexWrap">
            {
                json.map((item) => (
                        <div className="flexCol7" key={item.id}>
                            <Link to={'/info/' + item.title} >
                                <img id="cover" src={`../images/${item.img}`}/>
                            </Link>
                        </div>
                ))
            }
        </div>
    );
}