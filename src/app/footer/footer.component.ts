import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    public title: string;

    constructor(){
        this.title = 'Soy un footer';
    }

}