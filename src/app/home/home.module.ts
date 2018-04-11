import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { MyProyectsComponent } from "./main/myProyects/myProyects.component";
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { HOME_ROUTES } from './home.routes';


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
        HOME_ROUTES
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {

}
