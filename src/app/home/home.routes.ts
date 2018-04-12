import { Routes, RouterModule } from '@angular/router';
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { MyProyectsComponent } from './main/myProyects/myProyects.component';
import { HomeComponent } from './home.component';
import { HouseComponent } from './main/house/house.component';
import { DocumentationComponent } from './main/documentation/documentation.component';
import { SettingsComponent } from './main/settings/settings.component';

const ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'house', component: HouseComponent },            
            { path: 'workteam', component: WorkTeamComponent },
            { path: 'myProyects', component: MyProyectsComponent },
            { path: 'documentation', component: DocumentationComponent },   
            { path: 'settings', component: SettingsComponent },                                 
        ]
    },
];

export const HOME_ROUTES = RouterModule.forChild(ROUTES);
