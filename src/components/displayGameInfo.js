import React from "react";
import { useParams } from "react-router-dom";
import { APIConnection } from "../functions/apiConnection";
import AddEntry from "./addToList";
import InfoToUpdate from "./infoToUpdate";

function DisplayGameInfo() {
    
    const { title } = useParams();
    const json = APIConnection(5000, title);

    return (
        <div>
            {
                json.map((item) => (
                    <div className="container flexWrap" key={item.id}>
                        <div className="flexCol1 centerTag">
                            <h1>{item.title.replace(/_/g, ' ')}</h1>
                            <img id="cover" src={`../images/${item.img}`}/>
                            <AddEntry />
                            <InfoToUpdate />
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
                                        <li id="dev"><b>Developer: </b>{item.dev}</li>
                                        <li id="pub"><b>Publisher: </b> {item.pub}</li>
                                        <li id="date"><b>Release Date: </b> {item.date.slice(0, item.date.lastIndexOf('T'))}</li>
                                        <li id="rating"><b>Rating: </b>{item.rating}</li>
                                    </ul>
                                </div>
                                <div className="flexCol5 info">
                                    <h4 className="centerTag">System Requirements</h4>
                                    <ul>
                                        <li id="os"><b>OS: </b>{item.os}</li>
                                        <li id="cpu"><b>Processor: </b>{item.cpu}</li>
                                        <li id="ram"><b>Memory: </b>{item.ram}</li>
                                        <li id="gpu"><b>Graphics: </b>{item.gpu}</li>
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

export default DisplayGameInfo