// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-house',
//     templateUrl: './house.component.html',
//     styleUrls: ['./house.component.css']
// })

// export class HouseComponent {
//     public title: string;

//     constructor(){
//         this.title = 'house';
//     }

// }

import { Component, OnInit } from '@angular/core';
import { HouseService } from './house.service';

@Component({
    selector: 'app-house',
    templateUrl: './house.component.html',
    styleUrls: ['./house.component.css'],
    providers: [
        HouseService
    ]
})

export class HouseComponent implements OnInit {

    data: any = {};
    dataRestaurants: any = {};
    public title: string;

    constructor(private houseService: HouseService) {
        this.title = 'la home';
    }

    ngOnInit(): void {
        this.renderContact();
        this.renderRestaurants();

    }

    public renderContact(): void {
        this.houseService.getContacts().subscribe(data => {
            console.log('llamada backend', data);
            this.data = data;
        });
    }
    public renderRestaurants(): void {
        this.houseService.getRestaurants().subscribe(data => {
            console.log('llamada backend', data);
            this.dataRestaurants = data;
        });
    }

}
