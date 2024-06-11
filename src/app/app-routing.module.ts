import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CadastradosComponent } from './admin/cadastrados/cadastrados.component';
import { LancarEventosComponent } from './admin/lancar-eventos/lancar-eventos.component';
import { LoginComponent } from './login/login.component';
import { MinisterioComponent } from './ministerio/ministerio.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EventosComponent } from './eventos/eventos.component';
import { CadastroeditComponent } from './cadastroedit/cadastroedit.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin-home', component: AdminHomeComponent },
    { path: 'admin/cadastrados', component: CadastradosComponent },
    { path: 'admin/lancar-eventos', component: LancarEventosComponent },
    { path: 'ministerio', component: MinisterioComponent },
    { path: 'informacoes', component: InformacoesComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'cadastroedit', component: CadastroeditComponent },
    { path: 'eventos', component: EventosComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'cancelar-cadastro', redirectTo: '/login', pathMatch: 'full' }
  ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
