import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-configuracao',
  templateUrl: './configuracao.component.html',
  styleUrls: ['./configuracao.component.css']
})
export class ConfiguracaoComponent implements OnInit {

  user: User = new User()
  idUser = environment.id

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.findByIdUser()

  }

  confirmSenha(event: any) {

  }

  cancelar() {
    this.router.navigate(["/feed"])
  }

  findByIdUser() {
    console.log(JSON.stringify(this.idUser))
    this.user.id = this.idUser


    this.authService.getByIdUser(this.user.id).subscribe((resp: User) => {
      this.user = resp
      console.log(JSON.stringify(this.user))
    })

  }

  atualizar() {

    this.authService.atualizar(this.user).subscribe((resp: User) => {
      this.user = resp
      alert("Usuário atualizado com sucesso!")
      this.router.navigate(["/feed"])
      this.user = new User
    })

  }
}
