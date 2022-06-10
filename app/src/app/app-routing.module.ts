import { Component, Injectable, NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { CreateFormComponent } from './create-form/create-form.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { Title } from '@angular/platform-browser';


const routes: Routes = [
  { path: '', component: GamelistComponent },
  { path: 'create', component: CreateFormComponent },
  { path: 'info',
    children: [
      {path: '**', component: GameInfoComponent}
    ]  
  },
  { path: 'update',  
    children: [
      { path: '**', component: UpdateFormComponent }
    ]    
  },
  { path: 'delete', 
    children: [
      { path: '**', component: DeleteFormComponent }
    ]  
  },
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
