import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Usuarios } from 'src/app/services/usuarios';


@Component({
  selector: 'app-cadastrados',
  standalone: true,
  imports: [NgFor],
  templateUrl: './cadastrados.component.html',
  styleUrls: ['./cadastrados.component.css']
})
export class CadastradosComponent {
  public usuarios: Usuarios[] = [];

  constructor(private router: Router, private authService: AuthService) {
    this.authService.obterTodos().subscribe((res) => {
      this.usuarios = res.map((usuario) => {
        return {
          id: usuario.payload.doc.id,
          ...(usuario.payload.doc.data() as any),
        } as Usuarios;
      });
    });
  }

  adm(usuario: Usuarios){
    this.authService.editar(usuario);
  }

  goToCadastro() {
    this.router.navigate(['/admin/cadastro']);
  }

  goToVoltarHome() {
    this.router.navigate(['/admin-home']);
  }
}
