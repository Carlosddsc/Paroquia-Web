export class Eventos {
    private _id!: string;
    private _data!: string;
    private _hora!: string;
    private _informacoes!: string;
    private _usuario!: string;
    private _status!: string;

    constructor(id: string, data: string, hora: string, informacoes: string, usuario: string, status: string) {
        this._id = id;
        this._data = data;
        this._hora = hora;
        this._informacoes = informacoes;
        this._usuario = usuario;
        this._status = status;
    }

    public get id(): string {
        return this._id;
    }

    public get data(): string {
        return this._data;
    }

    public get hora(): string {
        return this._hora;
    }

    public get informacoes(): string {
        return this._informacoes;
    }

    public get usuario(): string {
        return this._usuario;
    }

    public get status(): string {
        return this._status;
    }

    public set id(value: string) {
        this._id = value;
    }

    public set data(value: string) {
        this._data = value;
    }

    public set hora(value: string) {
        this._hora = value;
    }

    public set informacoes(value: string) {
        this._informacoes = value;
    }

    public set usuario(value: string) {
        this._usuario = value;
    }

    public set status(value: string) {
        this._status = value;
    }
}
