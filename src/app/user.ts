/**
 * 用户类，存储当前登录用户信息
 */
export class User {
  private _id: string;
  private _name: string;
  private _mobile: string;


  constructor(id: string, name: string, mobile: string) {
    this._id = id;
    this._name = name;
    this._mobile = mobile;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get mobile(): string {
    return this._mobile;
  }

  set mobile(value: string) {
    this._mobile = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

}
