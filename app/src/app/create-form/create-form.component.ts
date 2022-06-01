import { Component, OnInit } from '@angular/core';
import { CREATE_GAME, GameType, GET_FULL_GAME } from '../games.service';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup, Validators} from '@angular/forms'
@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  game: GameType = {
    _id: "",
    title: "",
    summary: "",
    information: {
      dev: "",
      pub: "",
      date: "",
      rating: ""
    },
    requirements: {
      os: "",
      cpu: "",
      ram: "",
      gpu: "",
      storage: ""
    }
  };

  createGame() {
    this.apollo.mutate({
      mutation: CREATE_GAME,
      variables: {
        input: this.game
      },
    }).subscribe();
  }

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
  }

}
