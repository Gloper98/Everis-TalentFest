import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
    public title: string;

    constructor(private router: Router){
        this.title = 'la home';
    }

    tabActive(e){
       document.getElementById("tag").classList.add('d-none');
       console.log('hola');
    }

}
