import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { ROUTES_APP } from './app.routes';
import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,                            
    ReactiveFormsModule,
    HomeModule,
    LoginModule,
    ROUTES_APP,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
