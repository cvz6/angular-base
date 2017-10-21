export class User {
  private _id:string;
  private _mobile:string;


  get mobile (): string {
    return this._mobile;
  }

  set mobile (value: string) {
    this._mobile = value;
  }

  get id (): string {
    return this._id;
  }

  set id (value: string) {
    this._id = value;
  }

}
