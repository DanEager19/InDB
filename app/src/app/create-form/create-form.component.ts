import { Component, OnInit } from '@angular/core';
import { CREATE_GAME, GameInputType, GET_FULL_GAME } from '../games.service';
import { Apollo } from 'apollo-angular';
import { NgForm } from '@angular/forms'
@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  loading = true;
  error: any;

  onSubmit(f: NgForm) {
    this.apollo.mutate({
      mutation: CREATE_GAME,
      variables: {
        input: {
          title: f.value.title,
          summary: f.value.summary,
          information: {
            dev: f.value.dev,
            pub: f.value.pub,
            date: f.value.date,
            rating: f.value.rating
          },
          requirements: {
            os: f.value.os,
            cpu: f.value.cpu,
            ram: f.value.ram,
            gpu: f.value.gpu,
            storage: f.value.storage
          }
        }
      },
    }).subscribe();
    f.resetForm();
  }

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    
  }

}
