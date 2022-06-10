import { Component, OnInit } from '@angular/core';
import { GameService, GET_FULL_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';
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
  name:any;
  
  constructor(
    private apollo: Apollo, 
    private gameService: GameService, 
    private router: Router, 
    private title: Title
  ) { }

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
        link: this.router.url.slice(8),
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
      this.name = this.game.title;
      this.title.setTitle(`In-DB - ${this.name} | Delete`);
    });
  }

}
