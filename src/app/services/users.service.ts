import { Injectable } from '@angular/core';
import { Roles, Users } from 'app/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _role = Roles.User;
  public user = Users.usernames['0xb38e112bb553f13f4c475470e81b84d9a0da3dd2']

  constructor() { }

  public get role() {
    return this._role;
  }

  public set role(value) {
    this._role = value;
  }
}
