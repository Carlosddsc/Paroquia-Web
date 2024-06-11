import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Eventos } from 'src/app/services/eventos';
import { EventoService } from 'src/app/services/eventos.service';
import { Usuarios } from 'src/app/services/usuarios';

@Component({
  selector: 'app-admin-lancar-eventos',
  templateUrl: './lancar-eventos.component.html',
  styleUrls: ['./lancar-eventos.component.css']
})
export class LancarEventosComponent {
  eventoForm!: FormGroup;
  eventos: Eventos[] = [];
  public usuarios: Usuarios[] = [];

  constructor(private fb: FormBuilder,
              private eventoService: EventoService,
              private router: Router,
              private authService: AuthService) {

    this.eventoForm = this.fb.group({
      data: ['', Validators.required],
      hora: ['', Validators.required],
      informacoes: ['', Validators.required],
      usuario: ['', Validators.required],
    });

    this.eventoService.getEventos().subscribe((res) => {
      this.eventos = res.map((evento) => {
        return {
          id: evento.payload.doc.id,
          ...(evento.payload.doc.data() as any),
        } as Eventos;
      });
    });

    this.authService.obterTodos().subscribe((res) => {
      this.usuarios = res.map((usuario) => {
        return {
          id: usuario.payload.doc.id,
          ...(usuario.payload.doc.data() as any),
        } as Usuarios;
      });
    });
  }

  lancarEvento() {
    if (this.eventoForm.valid) {
      const { data, hora, informacoes, usuario } = this.eventoForm.value;
      // Convertendo a data para o formato desejado
      const dataFormatada = this.formatarData(data);
      const novoEvento: Eventos = new Eventos('', dataFormatada, hora, informacoes, usuario, "");

      this.eventoService.addEvento(novoEvento)
        .then(() => {
          alert('Dados salvos com sucesso!');
          this.eventoForm.reset();
        })
        .catch((error) => {
          console.error('Erro ao registrar:', error);
          alert('Erro ao registrar: ' + error.message);
        });
    }
  }

  // Função para formatar a data
  formatarData(data: string): string {
    const dataObj = new Date(data);
    const dia = dataObj.getDate().toString().padStart(2, '0');
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');
    const ano = dataObj.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  excluirEvento(evento : Eventos){
    const confirmDelete = window.confirm('Tem certeza de que deseja excluir este evento?');
    if(confirmDelete){
      this.eventoService.excluir(evento.id)
    }
  }
  goToVoltarHome() {
    this.router.navigate(['/admin-home']);
  }
}
