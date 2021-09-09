import { Tema } from "./Tema"
import { User } from "./User"

export class Postagem{
    public id: number
    public usuario: User
    public data: Date
    public descricao: string
    public media: string
    public publicacao: string
    public titulo: string
    public tema: Tema
}
