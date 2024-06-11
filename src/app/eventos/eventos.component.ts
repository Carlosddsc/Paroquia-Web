import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from '../services/eventos';
import { EventoService } from '../services/eventos.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent {
  eventos: Eventos[] = [];

  constructor(private router: Router, 
            private eventosService: EventoService,
            private auth: AuthService, 
            private afAuth: AngularFireAuth) {

  // Obter o estado de autenticação do usuário
  this.afAuth.authState.subscribe(user => {
    if (user && user.email) {
      // Buscar os detalhes do usuário pelo email
      this.auth.searchUsersByEmail(user.email).subscribe((res) => {
        if (res.length > 0) {
          const loggedInUser = res[0];
          
          // Obter todos os eventos
          this.eventosService.getEventos().subscribe((res) => {
            this.eventos = res.map((evento) => {
              return {
                id: evento.payload.doc.id,
                ...(evento.payload.doc.data() as any),
              } as Eventos;
            }).filter((evento) => evento.usuario === loggedInUser.email); 
          });
        }
      });
    }
  });
}


  confirmEvent(event: Eventos) {
    event.status = 'confirmed';
    this.eventosService.updateEvento(event.id, { ...event, status: event.status });
  }

  denyEvent(event: Eventos) {
    event.status = 'denied';
    this.eventosService.updateEvento(event.id, { ...event, status: event.status });
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
