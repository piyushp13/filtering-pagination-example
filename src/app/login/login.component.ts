import { Component, OnInit } from '@angular/core';
import { AuthenticationRequest, UserService } from '../user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userCredentials = new FormGroup({
    user: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  login(userCredentials: AuthenticationRequest) {
    console.log('User Credentials: ', userCredentials);

    this.userService.authenticate(userCredentials).subscribe((result: {status: string, authorized: boolean}) => {
      if (result && result.authorized) {
        this.router.navigate(['/landing']);
      }
    });
  }

}
