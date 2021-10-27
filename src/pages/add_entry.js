import React from "react";
const add_entry = () => {
    return (
    <form action="/" method="POST" id="login">
        <div class="d-flex flex-column">
            <div class="d-flex justify-content-center flex-row">
                <div class="d-flex flex-column">
                    <div class=" p-2">
                        <label for="title">Title:</label>
                    </div>
                    <div class="p-2">
                        <label for="summary">Summary:</label>
                    </div>
                </div>
                <div class="d-flex flex-column">
                    <div class="p-2">
                        <input type="text" id="title" placeholder="Title" name="title"/>
                    </div>
                    <div class="p-2">
                        <textarea id="summary" rows="5" cols="20" name="summary"></textarea>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center flex-row">
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <label for="dev">Developer:</label>
                        </div>
                        <div class="p-2">
                            <label for="pub">Publisher:</label>
                        </div>
                        <div class="p-2">
                            <label for="date">Release Date:</label>
                        </div>
                        <div class="p-2">
                            <label for="title">Genres:</label>
                        </div>
                        <div class="p-2">
                            <label for="title">Rating:</label>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <input type="text" id="dev" placeholder="Developer" name="dev"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="pub" placeholder="Publisher" name="pub"/>
                        </div>
                        <div class="p-2">
                            <input type="date" id="date" name="date"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="genres" placeholder="Genres" name="genres"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="rating" placeholder="Rating" name="rating"/>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column">
                            <div class="p-2">
                                <label for="os">OS:</label>
                            </div>
                            <div class="p-2">
                                <label for="cpu">Processor:</label>
                            </div>
                            <div class="p-2">
                                <label for="ram">Memory:</label>
                            </div>
                            <div class="p-2">
                                <label for="gpu">Graphics:</label>
                            </div>
                            <div class="p-2">
                                <label for="storage">Storage:</label>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex flex-column">
                        <div class="p-2">
                            <input type="text" id="os" placeholder="OS" name="os"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="cpu" placeholder="Processor" name="cpu"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="ram" placeholder="Memory" name="ram"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="gpu" placeholder="Graphics" name="gpu"/>
                        </div>
                        <div class="p-2">
                            <input type="text" id="storage" placeholder="Storage" name="storage"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center form-group">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
)
}
export default add_entry;
