import { Component } from '@angular/core';

@Component({
    selector: 'app-yape',
    templateUrl: './yape.component.html',
    styleUrls: ['./yape.component.css']
})

export class YapeComponent {
    public title: string;

    constructor(){
        this.title = 'yape';
    }

}