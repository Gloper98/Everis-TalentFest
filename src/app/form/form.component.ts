import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FormService } from './form.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [
    FormService
  ]
})

export class FormComponent  {

    data: any = {};

    constructor(private homeService: FormService) {
    }

    addProject(newProject: string){
        this.formService.getContacts().subscribe(data => {
            console.log('llamada backend', data);
            this.data = data;
        });
    }
}