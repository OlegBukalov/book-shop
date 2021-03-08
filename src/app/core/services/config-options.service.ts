import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface IUser {
  id: number;
  login: string;
  password: string;
  email: string;
  city: string;
}

export class ConfigOptionsService {
  public user: IUser;

  constructor() {
    this.user = {
      id: 0,
      login: '',
      password: '',
      email: '',
      city: ''
    }
  }

  public setUser(user: IUser): void {
    this.user.id = user.id;
    this.user.login = user.login;
    this.user.password = user.password;
    this.user.email = user.email;
    this.user.city = user.city;
  }

  public getUser(): IUser {
    return this.user;
  }

}
