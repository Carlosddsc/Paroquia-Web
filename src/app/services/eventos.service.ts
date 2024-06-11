import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';
import { Eventos } from './eventos';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  readonly PATH = 'eventos';

  constructor(private firestore: AngularFirestore) { }

  addEvento(eventos: Eventos) {
    return this.firestore.collection(this.PATH).add({
      data: eventos.data,
      hora: eventos.hora,
      informacoes: eventos.informacoes,
      usuario: eventos.usuario,
      status: eventos.status,
    });
  }

  eventTratemant(data: string, hora: string, informacoes: string, usuario: string){
    const create : Eventos = new Eventos("", data, hora, informacoes, usuario, "");
    this.addEvento(create);
  }

  getEventos(){
    return this.firestore.collection(this.PATH).snapshotChanges();
  }

  updateEvento(id: string, evento: any): Promise<void> {
    return this.firestore.collection(this.PATH).doc(id).update(evento);
  }

  excluir(id: string){
    return this.firestore.collection(this.PATH).doc(id).delete();
  }
}
