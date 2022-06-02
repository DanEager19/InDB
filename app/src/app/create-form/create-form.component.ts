import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameService } from '../game.service';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  formGroup = new FormGroup({
    title: new FormControl(''),
    summary: new FormControl(''),
    dev: new FormControl(''),
    pub: new FormControl(''),
    date: new FormControl(''),
    rating: new FormControl(''),
    os: new FormControl(''),
    cpu: new FormControl(''),
    ram: new FormControl(''),
    gpu: new FormControl(''),
    storage: new FormControl(''),
  });
  constructor(public gameService: GameService) {}


  ngOnInit(): void {
  
  }

}
