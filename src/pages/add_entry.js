import React from "react";
function add_entry() {
    return (
        <div className="container">
            <form action="/" method="POST" id="login">
                <div className="d-flex flex-column">
                    <div className="row">
                        <div className="col">
                            <div className="row col-6 col-md-4">
                                <label for="title">Title:</label>
                            </div>
                            <div className="row col-6 col-md-4">
                                <label for="summary">Summary:</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row col-6 col-md-4">
                                <input type="text" id="title" placeholder="Title" name="title"/>
                            </div>
                            <div className="row col-6 col-md-4">
                                <textarea id="summary" rows="5" cols="20" name="summary"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <label for="dev">Developer:</label>
                            </div>
                            <div className="row">
                                <label for="pub">Publisher:</label>
                            </div>
                            <div className="row">
                                <label for="date">Release Date:</label>
                            </div>
                            <div className="row">
                                <label for="genres">Genres:</label>
                            </div>
                            <div className="row">
                                <label for="rating">Rating:</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <input type="text" id="dev" placeholder="Developer" name="dev"/>
                            </div>
                            <div className="row">
                                <input type="text" id="pub" placeholder="Publisher" name="pub"/>
                            </div>
                            <div className="row">
                                <input type="date" id="date" name="date"/>
                            </div>
                            <div className="row">
                                <input type="text" id="genres" placeholder="Genres" name="genres"/>
                            </div>
                            <div className="row">
                                <input type="text" id="rating" placeholder="Rating" name="rating"/>
                            </div>
                        </div>
                            <div className="col">
                                <div className="row">
                                    <label for="os">OS:</label>
                                </div>
                                <div className="row">
                                    <label for="cpu">Processor:</label>
                                </div>
                                <div className="row">
                                    <label for="ram">Memory:</label>
                                </div>
                                <div className="row">
                                    <label for="gpu">Graphics:</label>
                                </div>
                                <div className="row">
                                    <label for="storage">Storage:</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row">
                                    <input type="text" id="os" placeholder="OS" name="os"/>
                                </div>
                                <div className="row">
                                    <input type="text" id="cpu" placeholder="Processor" name="cpu"/>
                                </div>
                                <div className="row">
                                    <input type="text" id="ram" placeholder="Memory" name="ram"/>
                                </div>
                                <div className="row">
                                    <input type="text" id="gpu" placeholder="Graphics" name="gpu"/>
                                </div>
                                <div className="row">
                                    <input type="text" id="storage" placeholder="Storage" name="storage"/>
                                </div>
                            </div>
                        </div>
                    <div className="row">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
export default add_entry;
