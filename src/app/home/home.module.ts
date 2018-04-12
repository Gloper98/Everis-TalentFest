import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SidenavComponent
    ],
    exports: [
        HomeComponent  
    ],
    //imports to consume API
    imports: [
        BrowserModule,
        HttpClientModule
    ]
})

export class HomeModule {

}
