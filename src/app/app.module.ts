import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LancarEventosComponent } from './admin/lancar-eventos/lancar-eventos.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { MinisterioComponent } from './ministerio/ministerio.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EventosComponent } from './eventos/eventos.component';
import { environments } from 'src/environments/environment.prod';
import { CommonModule } from '@angular/common';
import { CadastroeditComponent } from './cadastroedit/cadastroedit.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    LancarEventosComponent,
    MinisterioComponent,
    InformacoesComponent,
    LoginComponent,
    CadastroComponent,
    EventosComponent,
    CadastroeditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environments.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
