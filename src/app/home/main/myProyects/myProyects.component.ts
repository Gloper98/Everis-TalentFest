import { Component } from '@angular/core';

@Component({
    selector: 'app-my-proyects',
    templateUrl: './myProyects.component.html',
    styleUrls: ['./myProyects.component.css']
})

export class MyProyectsComponent {
    public title: string;

    constructor(){
        this.title = 'proyectos';
    }

}
