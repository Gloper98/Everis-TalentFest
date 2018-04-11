import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public title: string;

    constructor(){
        this.title = 'la home';
    }

}
