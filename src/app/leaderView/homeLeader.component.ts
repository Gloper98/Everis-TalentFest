import { Component, OnInit } from '@angular/core';
import { HomeService } from './homeLeader.service';

@Component({
    selector: 'app-home',
    templateUrl: './homeLeader.component.html',
    providers: [
        HomeService
    ],
    styleUrls: ['./homeLeader.component.css']
})

export class HomeLeaderComponent implements OnInit {

    data: any = {};
    public title: string;

    constructor(private homeService: HomeService) {
        this.title = 'la home';
    }

    ngOnInit(): void {
        this.renderContact();
    }

    public renderContact(): void {
        this.homeService.getContacts().subscribe(data => {
            console.log('llamada backend', data);
            this.data = data;
        });
    }

}
