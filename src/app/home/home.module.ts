import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
    declarations: [
        HomeComponent,
        FooterComponent
    ],
    exports: [
        HomeComponent  
    ]
})
export class HomeModule {

}
