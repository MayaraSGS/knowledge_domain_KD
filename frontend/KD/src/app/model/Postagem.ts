import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public token: string
    public usuario: User
    public tema: Tema
}