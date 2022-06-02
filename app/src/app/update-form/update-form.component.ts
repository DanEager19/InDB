import { Component, OnInit } from '@angular/core';
import { GET_FULL_GAME, UPDATE_GAME } from '../games.service';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup, NgForm, Validators} from '@angular/forms'

@Component({
  selector: 'update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.scss']
})
export class UpdateFormComponent implements OnInit {
  game: any = '';
  loading = true;
  error: any;

  constructor(private apollo: Apollo) { }
  
  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_FULL_GAME,
      variables: {
        title: 'G',
      },
    }).valueChanges.subscribe(({data, error, loading}: any) => {
      this.loading = loading;
      this.error = error
      this.game = data.findGameByTitle;
    });
    this.gameForm = this.game;
  }

  gameForm = new FormGroup({
    title: new FormControl('', Validators.required),
    summary: new FormControl('', Validators.required)
  })
  onSubmit(f: NgForm) {

  }
  updateGame() {
    this.game = this.gameForm.value;
    this.apollo.mutate({
      mutation: UPDATE_GAME,
      variables: {
        id: this.game.id,
        input: this.game
      },
      refetchQueries: [{
        query: GET_FULL_GAME,
        variables: {
          title: 'G',
        },
      }]
    }).subscribe(({data, error, loading}: any) => {
      this.loading = loading;
      this.error = error
      this.game = data.findGameByTitle;
      this.gameForm.reset();
    });
  }

}
