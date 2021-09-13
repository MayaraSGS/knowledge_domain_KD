import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tema } from 'src/app/model/Tema';
import { TemaService } from 'src/app/service/tema.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema-edit',
  templateUrl: './tema-edit.component.html',
  styleUrls: ['./tema-edit.component.css']
})
export class TemaEditComponent implements OnInit {

  tema: Tema = new Tema()

  id: number

  constructor(

    private temaService: TemaService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {

    if (environment.token == '') {

      this.router.navigate(['/entrar'])
    }

    this.id = this.route.snapshot.params['id']

    this.findByIdTema(this.id)

  }


  findByIdTema(id: number) {

    this.temaService.getByIdTema(id).subscribe((resp: Tema) => {

      this.tema = resp
      console.log(JSON.stringify(this.tema))

    })

  }

  atualizar() {
    this.tema.id = this.id

    this.temaService.putTema(this.tema).subscribe((resp: Tema) => {
      this.tema = resp
      alert('Tema atualizado com sucesso!')
      this.router.navigate(['/tema'])
    })
  }

}
