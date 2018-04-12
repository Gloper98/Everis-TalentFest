import { Routes, RouterModule } from '@angular/router';
import { WorkTeamComponent } from './main/workTeam/workTeam.component';
import { MyProyectsComponent } from './main/myProyects/myProyects.component';
import { HomeComponent } from './home.component';

const ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent, children: [
            { path: 'workteam', component: WorkTeamComponent },
            { path: 'myProyects', component: MyProyectsComponent }
        ]
    },
];

export const HOME_ROUTES = RouterModule.forChild(ROUTES);
