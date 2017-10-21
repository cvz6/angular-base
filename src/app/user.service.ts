import {Injectable} from '@angular/core';
import {User} from "./user";

@Injectable()
export class UserService {

  constructor() { }

  private _user:User;


  get user (): User {
    return this._user;
  }

  set user (value: User) {
    this._user = value;
  }
}
