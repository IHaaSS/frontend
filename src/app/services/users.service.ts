import { Injectable } from '@angular/core';
import { Roles } from 'app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _role = Roles.User;

  constructor() { }

  public get role() {
    return this._role;
  }
  
  public set role(value) {
    this._role = value;
  }
}
