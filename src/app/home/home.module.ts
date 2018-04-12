import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MyProyectsComponent } from "./main/myProyects/myProyects.component";
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { HOME_ROUTES } from './home.routes';
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        SidenavComponent,
        MyProyectsComponent,
        WorkTeamComponent
    ],
    imports: [
        HOME_ROUTES,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        HomeComponent  
    ]
})

export class HomeModule {

}
