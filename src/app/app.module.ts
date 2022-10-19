import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewallbooksComponent } from './viewallbooks/viewallbooks.component';
import { RouterModule, Routes } from '@angular/router';

const link:Routes=[
  {
    path:"",component:AddbookComponent
  },
  {
    path:"view",component:ViewallbooksComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddbookComponent,
    ViewallbooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(link)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
