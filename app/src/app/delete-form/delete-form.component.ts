import { Component, OnInit } from '@angular/core';
import { GameService, GET_FULL_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent implements OnInit {
  game: any;
  loading = true;
  error: any;
  id: string = '';

  constructor(private apollo: Apollo, public gameService: GameService) { }
  formGroup: FormGroup = new FormGroup({
    id: new FormControl({value:'', disabled: true}),
    title: new FormControl({value:'',disabled: true}),
  });

  async deleteGameForm() {
    await this.gameService.deleteGame(this.id);
  }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_FULL_GAME,
      variables: {
        title: 'Hi',
      },
    }).valueChanges.subscribe(({data, loading, error}: any) => {
      this.game = data.findGameByTitle;
      this.loading = loading;
      this.error = error
      this.id = this.game._id;
      this.formGroup.setValue({
        id: this.game._id, 
        title: this.game.title
      })
    });
  }

}
