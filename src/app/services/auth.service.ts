import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public auth : boolean = false;
  public username! : string;
  public password! : string;
  public token : string = '';

  constructor() { }

  login() {
    this.auth = true;
    localStorage.setItem('auth', this.auth.toString());
  }

  logout() {
    this.auth = false;
    localStorage.clear();
  }

  showSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
    return this.auth;
  }

  setSession() {
    this.auth = (localStorage.getItem('auth')?.toLowerCase() == 'true');
  }

  saveSession(username : string, password : string) {
    // localStorage.setItem('username', username);
    // localStorage.setItem('password', password);
    this.username = username;
    this.password = password;
  }

  getToken(username : string, password : string) : boolean {
    if (username == 'fer' && password == '123')
    {
      this.token = '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';
    }

    return (this.token != '');
  }

}
