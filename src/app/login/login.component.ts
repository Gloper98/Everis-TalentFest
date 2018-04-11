import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    public title: string;

    constructor(private router: Router) {
        this.title = 'login';
    }

     public goLogin() {
    this.router.navigate(['/home']);
  }


}
