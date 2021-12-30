import React, {useState} from "react";

function CreateForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {    
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const url = 'http://localhost:5000/games'
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        }
        fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
    };
    return (
        <div className="container">
        <form onSubmit={handleSubmit} method="POST" action="./">
            <div className="row">
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
                                <input type="text" id="title" name="title" value={inputs.title || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="summary">Summary:</label>
                            </div>
                            <div className="col p-2">
                                <textarea id="summary" rows="4" cols="40" name="summary" value={inputs.summary || ""} onChange={handleChange}></textarea>
                            </div>
                        </div>
                    </div>
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
                                <input type="text" id="dev" name="dev" value={inputs.dev || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="pub">Publisher:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="pub" name="pub" value={inputs.pub || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="date">Release Date:</label>
                            </div>
                            <div className="col p-2">
                                <input type="date" id="date" name="date" value={inputs.date || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="genres">Genres:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="genres" name="genres" value={inputs.genres || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="rating">Rating:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="rating" name="rating" value={inputs.rating || ""} onChange={handleChange}/>
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
                                <input type="text" id="os" name="os" value={inputs.os || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="cpu">Processor:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="cpu" name="cpu" value={inputs.cpu || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="ram">Memory:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="ram" name="ram" value={inputs.ram || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="gpu">Graphics:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="gpu" name="gpu" value={inputs.gpu || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 p-2">
                                <label htmlFor="storage">Storage:</label>
                            </div>
                            <div className="col p-2">
                                <input type="text" id="storage" name="storage" value={inputs.storage || ""} onChange={handleChange}/>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary" value="Submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    )
}

export default CreateForm