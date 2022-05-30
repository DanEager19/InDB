import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  handleChange = (event:any) => {    
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  handleSubmit = (event:any) => {
    event.preventDefault()

    const url = 'http://localhost:5000/games'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputs)
    }
    fetch(url, requestOptions)
    .then(() => console.log('Submitted successfully'))
    .catch(error => console.log('Form submit error', error))
  };
  ngOnInit(): void {
  }

}
