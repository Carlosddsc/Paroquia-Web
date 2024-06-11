import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuarios } from '../services/usuarios';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastroedit',
  templateUrl: './cadastroedit.component.html',
  styleUrls: ['./cadastroedit.component.css']
})
export class CadastroeditComponent implements OnInit{
  editar!: FormGroup;
  usuarios!: Usuarios;

  email!: string;
  idade!: string;
  paroquia!: string;
  servindo!: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
  ) {
    
  }

  ngOnInit(){
    this.usuarios = history.state.usuarios;
    console.log('Informações do usuario:', this.usuarios);

    this.email = this.usuarios?.email;
    this.idade = this.usuarios?.idade;
    this.paroquia = this.usuarios?.paroquia;
    this.servindo = this.usuarios?.servindo;
    

    this.editar = this.fb.group({
      email: [this.email, [Validators.required]],
      idade: [this.idade, [Validators.required]],
      paroquia: [this.paroquia, [Validators.required]],
      servindo: [this.servindo, [Validators.required]],
      
    });
  }

  onSubmit() {
    if (this.editar.valid) {
        const new_part: Usuarios = {
            ...this.editar.value,
            id: this.usuarios.id,
        };

          this.auth.editarCadastro(new_part, this.usuarios.id)
          this.router.navigate(['/home'])
        
    } else {
        
    }
  }
  
}
