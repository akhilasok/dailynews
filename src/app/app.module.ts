import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

// import { CountryPickerModule } from 'angular2-countrypicker';

import { MyserviceService } from './myservice.service';
import { LoadingService } from './loading.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SportsComponent } from './sports/sports.component';
import { NewspapperComponent } from './newspapper/newspapper.component';
import { NewslayoutComponent } from './newslayout/newslayout.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NewsfeedComponent,
    LoginComponent,
    RegistrationComponent,
    SportsComponent,
    NewspapperComponent,
    NewslayoutComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // CountryPickerModule.forRoot({
    //   baseUrl: 'assets/data'
    // }),
    RouterModule.forRoot([
         {
            path: '',
            component: NewspapperComponent
         },
         {
            path: 'login',
            component: LoginComponent
         },
         {
            path: 'signup',
            component: RegistrationComponent
         },
         {
            path: 'sports',
            component: SportsComponent
         },
         {
            path: 'newspapper',
            component: NewsfeedComponent
         }
      ])
  ],
  providers: [MyserviceService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
