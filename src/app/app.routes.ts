import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: LoginComponent},
    {path: '**', component: HomeComponent}
];

// const HOME_ROUTES: Routes = [
//     {path: 'home/proyects' , component: MyProyectsComponent},
//     {path: 'home/work-team', component: WorkTeamComponent}
// ]

export const ROUTES_APP = RouterModule.forRoot(ROUTES);

// export const ROUTES_MAIN = RouterModule.forChild()