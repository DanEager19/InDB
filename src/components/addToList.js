import React, { useState } from "react";
import {Dropdown, Form} from "react-bootstrap"
import RangeSlider from 'react-bootstrap-range-slider';

function AddEntry() {
    const [score, setScore] = useState(5);

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {    
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const url = `http://localhost:5001/userdb/${title}`
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        }
        fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
    };
    //Change status button based on descicions 
    return (
        <div>
            <form action="." method="POST" className="text-center">
                <Dropdown id="status">
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">
                        Status
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#">Playing</Dropdown.Item>
                        <Dropdown.Item href="#">Finished</Dropdown.Item>
                        <Dropdown.Item href="#">Paused</Dropdown.Item>
                        <Dropdown.Item href="#">Dropped</Dropdown.Item>
                        <Dropdown.Item href="#">Wishlisted</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <Form.Label>Score: {score}</Form.Label>
                <RangeSlider 
                    tooltip="off"
                    onChange={e => setScore(e.target.value)}
                    min={0}
                    max={10}
                />
            </form>
        </div>
    )
}

export default AddEntry