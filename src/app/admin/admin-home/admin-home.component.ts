import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent {

  constructor(private router: Router) { }

  goToCadastros() {
    this.router.navigate(['/admin/cadastrados']);
  }

  goToAdminEventos() {
    this.router.navigate(['/admin/lancar-eventos']); // Rota para a tela de lançar eventos
  }
  sair() {
    this.router.navigate(['/login']);
  }
}
