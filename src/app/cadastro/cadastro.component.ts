import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      idade: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      paroquia: ['', Validators.required],
      servindo: ['ministro', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmaSenha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      const user = this.cadastroForm.value;
      console.log(user);
      if (this.cadastroForm.value.senha !== this.cadastroForm.value.confirmaSenha) {
        alert('As senhas não coincidem!');
      } else {
        this.auth.register(
          this.cadastroForm.value.email,
          this.cadastroForm.value.senha,
          this.cadastroForm.value.nome,
          this.cadastroForm.value.paroquia,
          this.cadastroForm.value.servindo,
          this.cadastroForm.value.idade,
          false,
        ).then(() => {
          alert('Dados salvos com sucesso!');
          this.router.navigate(['/login']);
        }).catch((error) => {
          console.error(error);
          alert('Erro ao registrar: ' + error.message);
        });
      }
    }
  }

  cancelarCadastro() {
    this.router.navigate(['/login']);
  }
}
