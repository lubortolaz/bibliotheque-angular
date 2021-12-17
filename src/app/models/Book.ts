/**
 * Classe Book
 */
export class Book {
  private _id: number;
  private _name: string;
  private _author: string;
  private _description: string;
  private _status: boolean;

  constructor(
    id: number,
    name: string,
    author: string,
    description: string,
    status: boolean
  ) {
    this._id = id;
    this._name = name;
    this._author = author;
    this._description = description;
    this._status = status;
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get author(): string {
    return this._author;
  }

  public set author(author: string) {
    this._author = author;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get status(): boolean {
    return this._status;
  }

  public set status(status: boolean) {
    this._status = status;
  }
}
