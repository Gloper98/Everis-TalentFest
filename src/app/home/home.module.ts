import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { SidenavComponent } from '../sidenav/sidenav.component';


@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        SidenavComponent
    ],
    exports: [
        HomeComponent
    ]
})

export class HomeModule {

}
