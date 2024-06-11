import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../services/usuarios';
import { AuthService } from '../services/auth.service';
import { NgFor } from '@angular/common';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public usuarios: Usuarios[] = [];

  constructor(private router: Router, private auth: AuthService, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user && user.email) {
        this.auth.searchUsersByEmail(user.email).subscribe((res) => {
          if (res.length > 0) {
            const loggedInUser = res[0];
            this.auth.obterTodos().subscribe((res) => {
              this.usuarios = res.map((usuario) => {
                return {
                  id: usuario.payload.doc.id,
                  ...(usuario.payload.doc.data() as any),
                } as Usuarios;
              }).filter((usuario) => usuario.nome === loggedInUser.nome); // Filtrando pelo campo nome que contém o email
            });
          }
        });
      }
    });
  }

  goToEventos() {
    this.router.navigate(['/eventos']);
  }

  goToInformacoes() {
    this.router.navigate(['/informacoes']);
  }

  goToMinisterio() {
    this.router.navigate(['/ministerio']);
  }

  goToCadastro(usuarios: Usuarios) {
    this.router.navigate(['/cadastroedit'], { state: { usuarios: usuarios } });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
