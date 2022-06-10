import { Component, OnInit } from '@angular/core';
import { GameService, GET_FULL_GAME } from '../game.service';
import { Apollo } from 'apollo-angular';
import {  FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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
  ) { }

  async updateGameForm() {
    await this.gameService.updateGame(this.id, this.formGroup.value);
  }

  formGroup: FormGroup = this.gameService.gameForm()
  async ngOnInit(): Promise<void> {

    this.name = this.router.url.slice(8);
    await this.apollo.watchQuery({
      query: GET_FULL_GAME,
      variables: {
        title: this.name,
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
