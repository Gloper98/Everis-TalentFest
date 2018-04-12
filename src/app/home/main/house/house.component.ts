import { Component } from '@angular/core';

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    styleUrls: ['./house.component.css']
})

export class HouseComponent {
    public title: string;

    constructor(){
        this.title = 'house';
    }

}