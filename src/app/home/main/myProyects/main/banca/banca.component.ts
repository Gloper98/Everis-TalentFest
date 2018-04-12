import { Component } from '@angular/core';

@Component({
    selector: 'app-banca',
    templateUrl: './banca.component.html',
    styleUrls: ['./banca.component.css']
})

export class BancaComponent {
    public title: string;

    constructor(){
        this.title = 'banca';
    }

}