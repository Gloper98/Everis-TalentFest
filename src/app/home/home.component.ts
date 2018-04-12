import { Component } from '@angular/core';
//import to use http request
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent {
    // variable to use API
    private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
    data:any ={};
    public title: string;

    constructor(private http: Http){
        console.log('Hola');
        this.title = 'la home';
        this.getContacts();
        this.getData();
    }

    getData() {
        return this.http.get(this.apiUrl)
        .map((res: Response) => res.json())
    }

    getContacts() {
        this.getData().subscribe(data => {
            console.log(data);
            this.data =data
        })
    }

}
