// src/app/services/cadastro.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DocumentData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  constructor(private firestore: AngularFirestore) {}

  addUsuario(usuario: DocumentData): Promise<any> {
    return this.firestore.collection('cadastro').add(usuario);
  }
}
