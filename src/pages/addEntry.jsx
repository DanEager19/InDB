import React from "react";
import Genres from "../components/addGenre";
function AddEntry() {
    return (
        <div className="container">
            <form action="." method="POST" id="login">
                <div className="row">
                    <div className="row">
                        <div className="row">
                            <h4>General:</h4>
                            <hr></hr>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="title">Title:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="title" placeholder="Title" name="title"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="summary">Summary:</label>
                            </div>
                            <div className="col p-2">
                                <textarea id="summary" rows="4" cols="40" name="summary"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <h4>Info:</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="dev">Developer:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="dev" placeholder="Developer" name="dev"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="pub">Publisher:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="pub" placeholder="Publisher" name="pub"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="date">Release Date:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="date" id="date" name="date"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="genres">Genres:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="genres" placeholder="Genres" name="genres"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="rating">Rating:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="rating" placeholder="Rating" name="rating"/>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <h4>System Requirements:</h4>
                                <hr></hr>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="os">OS:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="os" placeholder="OS" name="os"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="cpu">Processor:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="cpu" placeholder="Processor" name="cpu"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="ram">Memory:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="ram" placeholder="Memory" name="ram"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="gpu">Graphics:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="gpu" placeholder="Graphics" name="gpu"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3 p-2">
                                    <label htmlFor="storage">Storage:</label>
                                </div>
                                <div className="col p-2">
                                    <input type="text" id="storage" placeholder="Storage" name="storage"/>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default AddEntry;
