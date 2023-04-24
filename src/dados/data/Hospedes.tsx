import { Enderecos } from "./Enderecos";
import escolherObjetoAleatorio from "../../globals/utils/escolherObjAleatorio";

export const Hospedes = [
  {
    cpf: "740.948.750-00",
    nome: "Usuário",
    email: "usuario@email.com",
    telefone: "+5587991239123",
    //a senha é criptografada no banco. como estamos falando de demonstração,
    //usamos uma senha teste
    senha: "senhausuario#11",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "490.522.840-91",
    nome: "Senhor Lorem Ipsun",
    email: "loremipsuno@email.com",
    telefone: "+558198121289",
    senha: "loremipsun#11",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "492.123.456-78",
    nome: "Joana Silva",
    email: "joana.silva@email.com",
    telefone: "+558199876543",
    senha: "123456",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "123.456.789-00",
    nome: "José Santos",
    email: "jose.santos@email.com",
    telefone: "+558198765432",
    senha: "senha123",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "987.654.321-00",
    nome: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    telefone: "+558198765432",
    senha: "senha456",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "555.555.555-55",
    nome: "Fulano de Tal",
    email: "fulano.tal@email.com",
    telefone: "+558197654321",
    senha: "senha789",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "222.222.222-22",
    nome: "Beltrano da Silva",
    email: "beltrano.silva@email.com",
    telefone: "+558198765432",
    senha: "abcd1234",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "111.111.111-11",
    nome: "Ciclano de Oliveira",
    email: "ciclano.oliveira@email.com",
    telefone: "+558197654321",
    senha: "qwert789",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
  {
    cpf: "999.999.999-99",
    nome: "Ana Clara",
    email: "ana.clara@email.com",
    telefone: "+558199876543",
    senha: "senha999",
    idEndereco: escolherObjetoAleatorio(Enderecos),
  },
];
