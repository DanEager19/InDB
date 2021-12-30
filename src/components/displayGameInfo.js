import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
export default function DisplayGameInfo() {
    const { title } = useParams();
    const [json, setJson] = useState([]);
    const getJSON = async () => {
        const response = await fetch(`http://localhost:5000/${title}`)
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
                    <div className="container flexWrap" key={item.id}>
                        <div className="flexCol1 centerTag">
                            <h1>{item.title.replace(/_/g, ' ')}</h1>
                            <img id="cover" src={`../images/${item.img}`}/>
                        </div>
                        <div className="flexCol2">
                            <div className="flexCol3 desc">
                                <h4 className="centerTag">Summary</h4>
                                <p id="summary" className="centerTag">{item.summary}</p>
                            </div>
                            <div className="container flexWrap flexCol4">
                                <div className="flexCol5 info">
                                    <h4 className="centerTag">Info</h4>
                                    <ul>
                                        <li id="dev"><b>Developer: </b>{item.developer}</li>
                                        <li id="pub"><b>Publisher: </b> {item.publisher}</li>
                                        <li id="rel_date"><b>Release Date: </b> {item.release_date.slice(0, item.release_date.lastIndexOf('T'))}</li>
                                        <li id="genres"><b>Genres: </b>Action, Roguelike, Dungeon Crawler</li>
                                        <li id="rating"><b>Rating: </b>{item.rating}</li>
                                    </ul>
                                </div>
                                <div className="flexCol5 info">
                                    <h4 className="centerTag">System Requirements</h4>
                                    <ul>
                                        <li id="os"><b>OS: </b>{item.os}</li>
                                        <li id="cpu"><b>Processor: </b>{item.processor}</li>
                                        <li id="ram"><b>Memory: </b>{item.memory}</li>
                                        <li id="gpu"><b>Graphics: </b>{item.graphics}</li>
                                        <li id="storage"><b>Storage: </b>{item.storage}</li>
                                    </ul>
                                </div>
                            </div>
                        </div> 
                    </div>
                ))
            }
        </div>
    );
}
