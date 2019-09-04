import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  authenticate(userCredentials?: AuthenticationRequest): Observable<{ status: string, authorized: boolean }> {
    if (userCredentials) {
      return this.http.post(`${environment.restUrl}/login`, { user: userCredentials.user, password: userCredentials.password }).pipe(
        map((res: { status: string, token: string }) => {
          if (res && res.status === 'OK') {
            localStorage.setItem('token', res.token);
            return { status: 'OK', authorized: true };
          }
          console.log('Authorization failed');
          return { status: 'OK', authorized: false };
        })
      );
    } else {
      console.log('Called');
      const localToken = localStorage.getItem('token');
      if (localToken) {
        return this.http.get<{ status: string, authorized: boolean }>(`${environment.restUrl}/authCheck`, {
          headers: { authorization: localToken }
        });
      }
      return of({ status: 'OK', authorized: false });
    }
  }
}

export interface AuthenticationRequest {
  user: string;
  password: string;
}
