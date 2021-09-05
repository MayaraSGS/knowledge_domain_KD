import { Postagem } from "./Postagem"

export class Tema{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public token: string
    public postagem: Postagem[]
}