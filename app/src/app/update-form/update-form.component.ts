import { Component, OnInit } from '@angular/core';
import { GameService, GET_FULL_GAME, UPDATE_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  game: any;
  loading = true;
  error: any;
  id: string = '';
  formGroup: FormGroup = new FormGroup({
    id: new FormControl({value:'', disabled: true}),
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
  constructor(private apollo: Apollo, public gameService: GameService) { 
    
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_FULL_GAME,
      variables: {
        title: 'Ha',
      },
    }).valueChanges.subscribe(({data, loading, error}: any) => {
      this.game = data.findGameByTitle;
      this.loading = loading;
      this.error = error
      this.id = this.game._id;
      this.formGroup.setValue({
        id: this.game._id, 
        title: this.game.title,
        summary: this.game.summary,
        dev: this.game.information.dev,
        pub: this.game.information.pub,
        date: this.game.information.date,
        rating: this.game.information.rating,
        os: this.game.requirements.os,
        cpu: this.game.requirements.cpu,
        ram: this.game.requirements.ram,
        gpu: this.game.requirements.gpu,
        storage: this.game.requirements.storage
      })
    });
  }
}
