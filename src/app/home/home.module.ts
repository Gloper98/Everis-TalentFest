import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent,
        HeaderComponent
    ],
    exports: [
        HomeComponent  
    ]
})

export class HomeModule {

}
