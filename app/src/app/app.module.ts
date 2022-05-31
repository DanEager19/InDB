import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UpdateFormComponent } from './update-form/update-form.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { GamelistComponent } from './gamelist/gamelist.component';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpdateFormComponent,
    CreateFormComponent,
    FooterComponent,
    AboutComponent,
    GamelistComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
