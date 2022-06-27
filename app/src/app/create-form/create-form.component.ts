import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { GameService } from '../game.service';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  constructor(
    private gameService: GameService, 
    private title: Title
  ) {}
  formGroup: FormGroup = this.gameService.gameForm()
  
  async createGameForm() {
    await this.gameService.createGame(this.formGroup.value)
  }
  ngOnInit(): void {
    
    this.title.setTitle(`In-DB - Create`);
  }

}
