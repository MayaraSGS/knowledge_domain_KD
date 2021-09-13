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
import { PostagemDeleteComponent } from './delete/postagem-delete/postagem-delete.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';

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
  {path: 'postagem-delete/:id', component: PostagemDeleteComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path:'configuracao', component: ConfiguracaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
