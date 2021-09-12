import { User } from './../model/User';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('https://knowledgedomain.herokuapp.com/api/v1/usuario/login', userLogin)
  }

  cadastrar(user: User): Observable<User> {
    return this.http.post<User>('https://knowledgedomain.herokuapp.com/api/v1/usuario/novo', user)
  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`https://knowledgedomain.herokuapp.com/api/v1/usuario/${id}`)
  }

  logado(){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }

  deslogado(){
    let des: boolean = false

    if(environment.token == ''){
      des = true
    }

    return des
  }

}
