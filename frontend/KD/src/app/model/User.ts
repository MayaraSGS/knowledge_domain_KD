import { Postagem } from "./Postagem"

export class User{
    public id: number
    public nome: string
    public email: string
    public senha: string
    public tipo: string
    public foto: string
    public descricao: string
    public bio: string
    public postagem: Postagem[]
}
