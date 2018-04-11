import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: '', component: HomeComponent},
    {path: '**', component: HomeComponent}
];

export const ROUTES_APP = RouterModule.forRoot(ROUTES);
