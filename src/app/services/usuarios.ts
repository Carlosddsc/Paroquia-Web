export class Usuarios {
  private _id: string;
  private _email: string;
  private _nome: string;
  private _paroquia: string;
  private _servindo: string;
  private _idade: string;
  private _adm: boolean;

  constructor(id: string, email: string, nome: string, paroquia: string, servindo: string, idade: string, adm: boolean) {
    this._id = id;
    this._email = email;
    this._nome = nome;
    this._paroquia = paroquia;
    this._servindo = servindo;
    this._idade = idade;
    this._adm = adm;
  }

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }
  
  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }
  
  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    this._nome = nome;
  }
  
  get paroquia(): string {
    return this._paroquia;
  }

  set paroquia(paroquia: string) {
    this._paroquia = paroquia;
  }
  
  get servindo(): string {
    return this._servindo;
  }

  set servindo(servindo: string) {
    this._servindo = servindo;
  }

  get idade(): string {
    return this._idade;
  }

  set idade(idade: string) {
    this._idade = idade;
  }

  get adm(): boolean {
    return this._adm;
  }

  set adm(adm: boolean) {
    this._adm = adm;
  }
}
