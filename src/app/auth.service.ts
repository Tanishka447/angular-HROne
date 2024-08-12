import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor() { }

  isAuthenticated(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(username: string, password: string): boolean {
    // Simulate an API call
    if (username === 'user' && password === 'password') {
      this.loggedIn.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn.next(false);
  }
}
