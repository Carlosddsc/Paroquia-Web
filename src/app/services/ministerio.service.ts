import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MinisterioService {
  private ministerios = [
    { id: '1', nome: 'Ministério de Louvor', funcao: 'Responsável por conduzir a adoração através da música.', videoId: 'VIDEO_ID_1' },
    { id: '2', nome: 'Ministério de Dança', funcao: 'Responsável por ministrar através da dança durante os cultos.', videoId: 'VIDEO_ID_2' },
    // Adicione mais ministérios conforme necessário
  ];

  constructor() { }

  getMinisterioById(id: string) {
    return this.ministerios.find(ministerio => ministerio.id === id);
  }
}
