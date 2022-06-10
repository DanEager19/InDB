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
import { ApolloModule} from 'apollo-angular';
import { GraphQLModule } from './graphql.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameInfoComponent } from './game-info/game-info.component';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { FourZeroFourComponent } from './four-zero-four/four-zero-four.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UpdateFormComponent,
    CreateFormComponent,
    FooterComponent,
    AboutComponent,
    GamelistComponent,
    GameInfoComponent,
    DeleteFormComponent,
    FourZeroFourComponent,
    LoginComponent,
    RegisterComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    ApolloModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    GraphQLModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
