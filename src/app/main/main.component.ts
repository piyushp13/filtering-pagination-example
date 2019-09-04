import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router,
              public authService: AuthenticationService) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

}
