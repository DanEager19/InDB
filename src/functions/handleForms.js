import { useState} from "react";


//Make this a class
export default function HandleForms() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {    
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault()

        const url = `http://localhost:5000/games/${title}`
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(inputs)
        }
        fetch(url, requestOptions)
        .then(response => console.log('Submitted successfully'))
        .catch(error => console.log('Form submit error', error))
    };
}