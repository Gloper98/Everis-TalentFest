import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class FormService {

  constructor(private http: HttpClient) {
  }

  addProject(newProject: string){
    const apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';

    this.http.post(apiUrl,{
        name:newProject,
        ocupation: 'Coloaborator'
    })
      .subscribe((data:any) => {
        console.log(data)
      });
  }
} 