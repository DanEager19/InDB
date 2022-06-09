import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  { path: 'create', component: CreateFormComponent },
  { path: 'update',  children: 
    [
      { path: '**', component: UpdateFormComponent }
    ] 
  },
  { path: 'delete', component: DeleteFormComponent },
  { path: '**', component: GameInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
