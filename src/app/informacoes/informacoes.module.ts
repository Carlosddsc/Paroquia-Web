import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { InformacoesComponent } from './informacoes.component';

@NgModule({
  declarations: [
    InformacoesComponent
  ],
  imports: [
    CommonModule // Adicione o CommonModule aqui
  ],
  exports: [
    InformacoesComponent
  ]
})
export class InformacoesModule { }
