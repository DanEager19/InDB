import { Component, OnInit } from '@angular/core';
import { GameService, GET_FULL_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';
import {  FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Title } from '@angular/platform-browser';

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
  name:any = '';  

  constructor(
    private apollo: Apollo, 
    private gameService: GameService,
    private router: Router,
    private title: Title
  ) { }

  async updateGameForm() {
    await this.gameService.updateGame(this.id, this.formGroup.value);
  }

  formGroup: FormGroup = this.gameService.gameForm()
  async ngOnInit(): Promise<void> {
    await this.apollo.watchQuery({
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
        title: this.game.title,
        link: this.game.link,
        summary: this.game.summary,
        developer: this.game.information.developer,
        publisher: this.game.information.publisher,
        date: this.game.information.date,
        rating: this.game.information.rating,
        series: this.game.information.series,
        genres: this.game.information.genres,
        modes: this.game.information.modes,
        platforms: this.game.information.platforms
      });
      this.name = this.game.title;
      this.title.setTitle(`In-DB - ${this.name} | Update`);
    });
  }
}
