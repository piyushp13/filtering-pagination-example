import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements CanActivate {
  public isLoggedIn = false;
  constructor(private userService: UserService,
              private router: Router) { }
  canActivate() {
    return this.userService.authenticate().pipe(
      map((res: {status: string, authorized: boolean}) => {
        if (res && res.authorized) {
          this.isLoggedIn = true;
          return true;
        }
        this.isLoggedIn = false;
        this.router.navigate(['/login']);
        localStorage.clear();
        return false;
      })
    );
  }
}
