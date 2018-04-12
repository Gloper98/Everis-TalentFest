import { NgModule } from '@angular/core';
import { MyProyectsComponent } from "./myProyects.component";
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
// import { HOME_ROUTES } from './home.routes';

@NgModule({
    declarations: [
        MyProyectsComponent
    ],
    imports: [
        // HOME_ROUTES,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
      MyProyectsComponent  
    ]
})

export class MyProyectsModule {

}
