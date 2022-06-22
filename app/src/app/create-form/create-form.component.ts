import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GameService } from '../game.service';
import { Validate } from '../../../../validation';
//^^ This is very bad idea

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  validation = new Validate;
  constructor(
    private gameService: GameService, 
    private title: Title
  ) {}
  formGroup: FormGroup = this.gameService.gameForm()
  
  async createGameForm() {
    console.log(this.formGroup.value.link);
    await this.gameService.createGame(this.formGroup.value)
  }
  ngOnInit(): void {
    
    this.title.setTitle(`In-DB - Create`);
  }

}
