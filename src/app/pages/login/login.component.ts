import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  statusMessage: string = '';

  login() {
    // This is a UI prototype. Never log or submit credentials until a
    // real authenticated backend and transport are implemented.
    this.password = '';
    this.statusMessage = 'Login is not available in this prototype.';
  }
}
