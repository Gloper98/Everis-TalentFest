import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { FormComponent } from '../form/form.component';
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';



@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        FormComponent,
        SidenavComponent
    ],
    exports: [
        HomeComponent  
    ],
    //imports to consume API
    imports: [
        BrowserModule,
        HttpModule
    ]
})

export class HomeModule {

}
