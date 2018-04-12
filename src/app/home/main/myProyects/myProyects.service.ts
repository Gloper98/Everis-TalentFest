import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MyProyectsService {

  constructor(private http: HttpClient) {
  }

  public getContacts(): Observable<any> {
    const apiUrl = 'https://api.myjson.com/bins/nk6k7';

    return this.http.get(apiUrl)
      .map((res) => {
        return res;
      });
  }
} 