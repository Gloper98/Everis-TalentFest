// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-my-proyects',
//     templateUrl: './myProyects.component.html',
//     styleUrls: ['./myProyects.component.css']
// })

// export class MyProyectsComponent {
//     public title: string;

//     constructor(){
//         this.title = 'proyectos';
//     }

// }

import { Component, OnInit } from '@angular/core';
import { MyProyectsService } from './myProyects.service';

@Component({
    selector: 'app-my-proyects',
    templateUrl: './myProyects.component.html',
        styleUrls: ['./myProyects.component.css'],
    providers: [
        MyProyectsService
    ]
})

export class MyProyectsComponent implements OnInit {

    data: any = {};
    public title: string;

    constructor(private myProyectsService: MyProyectsService) {
        this.title = 'proyectos';
    }

    ngOnInit(): void {
        this.renderContact();
    }

    public renderContact(): void {
        this.myProyectsService.getContacts().subscribe(data => {
            console.log('llamada backend', data);
            this.data = data;
        });
    }

}