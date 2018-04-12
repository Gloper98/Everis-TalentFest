import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { HOME_ROUTES } from './home.routes';
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HouseComponent } from './main/house/house.component';
import { SettingsComponent } from './main/settings/settings.component';
import { DocumentationComponent } from './main/documentation/documentation.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from '../header/header.module';
import { HouseModule } from './main/house/house.module';
import { MyProyectsModule } from './main/myProyects/myProyects.module';
import { SideNavModule } from '../sidenav/sidenav.module';

@NgModule({
    declarations: [
        HomeComponent,
        WorkTeamComponent,
        SettingsComponent,
        DocumentationComponent,
    ],
    imports: [
        HOME_ROUTES,
        BrowserModule,
        HttpClientModule,
        FooterModule, 
        HouseModule,
        MyProyectsModule, 
        SideNavModule
    ],
    exports: [
        HomeComponent  
    ]
})

export class HomeModule {

}
