import { ConfiguracaoComponent } from './configuracao/configuracao.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { TemaComponent } from './tema/tema.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

const routes: Routes = [

  {path: '', redirectTo: 'inicio', pathMatch: 'full'},

  {path:'inicio', component: InicioComponent},
  {path:'sobre-nos', component: SobreNosComponent},
  {path:'contato', component: ContatoComponent},

  {path:'entrar', component: EntrarComponent},
  {path:'cadastrar', component: CadastrarComponent},

  {path:'feed', component: FeedComponent},
  {path:'tema', component: TemaComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path:'configuracao', component: ConfiguracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
