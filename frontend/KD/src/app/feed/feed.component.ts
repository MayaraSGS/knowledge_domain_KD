import { AuthService } from './../service/auth.service';
import { User } from './../model/User';
import { Tema } from './../model/Tema';
import { PostagemService } from './../service/postagem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';
import { Postagem } from '../model/Postagem';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagem: Postagem[]
  titulo: string

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  nomeTema: string

  user: User = new User()
  idUser = environment.id

  constructor(
    private router: Router,
    private PostagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.getAllPostagens()
    this.getAllTemas()
  }

  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

  getAllPostagens(){
    this.PostagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagem = resp
      console.log(JSON.stringify(this.listaPostagem))
    })
  }

  findByIdUser(){
    this.authService.getByIdUser(this.idUser).subscribe((resp: User) => {
      this.user = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.idUser
    this.postagem.usuario = this.user

    console.log(JSON.stringify(this.postagem))
    this.PostagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
    })
  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0
  }

  url='../../assets/perfil.png'

  onSelectFile(e:any){
    if(e.target.files){

      var reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])

      reader.onload = (event:any) => {
        this.url = event.target.result
      }

    }
  }

}
