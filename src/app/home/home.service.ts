import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {
  }

  public getContacts(): Observable<any> {
    const apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';

    return this.http.get(apiUrl)
      .map((res) => {
        return res;
      });
  }
} 
