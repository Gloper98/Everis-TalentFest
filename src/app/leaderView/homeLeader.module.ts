import { NgModule } from '@angular/core';
import { HomeLeaderComponent } from './homeLeader.component';
import { HeaderComponent } from '../header/header.component';
import { MyProyectsComponent } from "./main/myProyects/myProyects.component";
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { HOME_ROUTES } from './homeLeader.routes';
//Module to consume API, example
import { BrowserModule } from '@angular/platform-browser';
import { HouseComponent } from './main/house/house.component';
import { SettingsComponent } from './main/settings/settings.component';
import { DocumentationComponent } from './main/documentation/documentation.component';
import { HttpClientModule } from '@angular/common/http';
import { YapeComponent } from './main/myProyects/main/yape/yape.component';
import { BancaComponent } from './main/myProyects/main/banca/banca.component';
import { SidenavLeaderComponent } from '../sidenavLeader/sidenavLeader.component';
import { HouseModule } from './main/house/house.module';
import { HomeModule } from '../sidenavLeader/sidenavLeader.module';



@NgModule({
    declarations: [
        HomeLeaderComponent,
        // HeaderComponent,
//SidenavLeaderComponent,
        MyProyectsComponent,
        WorkTeamComponent,
        //HouseComponent,
        SettingsComponent,
        DocumentationComponent,
        YapeComponent,
        BancaComponent
    ],
    imports: [
        HOME_ROUTES,
        BrowserModule,
        HttpClientModule,
        HouseModule,
        HomeModule
    ],
    exports: [
        HomeLeaderComponent  
    ]
})

export class HomeLeaderModule {

}
