import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../../../shared/interfaces/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public connect(auth: Auth) {
    console.log(auth);
    this.authService.signIn(auth);
  }

}
