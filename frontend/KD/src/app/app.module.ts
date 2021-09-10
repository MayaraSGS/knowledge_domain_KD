import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FormsModule } from '@angular/forms';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { FeedComponent } from './feed/feed.component';
import { TemaComponent } from './tema/tema.component';
import { PostagemComponent } from './postagem/postagem.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { MenuFeedComponent } from './menu-feed/menu-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    ContatoComponent,
    InicioComponent,
    SobreNosComponent,
    EntrarComponent,
    CadastrarComponent,
    FeedComponent,
    TemaComponent,
    PostagemComponent,
    TemaDeleteComponent,
    TemaEditComponent,
    TemaEditComponent,
    MenuFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
