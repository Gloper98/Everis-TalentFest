import { Component } from '@angular/core';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
    public title: string;

    constructor(){
        this.title = 'la home';
    }

}
