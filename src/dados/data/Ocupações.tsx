import imagem1 from "../images/quartos/1.png";
import imagem2 from "../images/quartos/2.png";
import imagem3 from "../images/quartos/3.png";

import { Enderecos } from "./Enderecos";
import { TiposQuarto } from "./TiposQuarto";
import escolherObjetoAleatorio from "../../globals/utils/escolherObjAleatorio";
import { Ocupação } from "../../globals/types";

export const OcupaçãoDefault: Ocupação = {
  id: 0,
  codConfirmacao: 404,
  idQuarto: {
    id: 0,
    status: 1,
    imagename: "",
    numero: 404,
    idTipoQuarto: {
      id: 404,
      nome: "",
      descricao: "",
      capacidade: 0,
      camaCasal: 0,
      camaSolteiro: 0,
      diaria: 0,
    },
  },
  idReserva: {
    id: 0,
    dtInicio: "",
    dtFim: "",
    confirmada: 0,
    cpfHospede: {
      cpf: "",
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      idEndereco: [
        {
          logradouro: "",
          bairro: "",
          cidade: "",
          numero: 0,
          pais: "",
        },
      ],
    },
  },
};
// {
//   id: 1,
//   codConfirmacao: 0,
//   idQuarto: {
//     id: 1,
//     status: 0,
//     imagename: imagem2,
//     numero: 102,
//     idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
//   },
//   idReserva: {
//     id: 1,
//     dtInicio: "25/03/2023",
//     dtFim: "30/04/2023",
//     confirmada: 1,
//     cpfHospede: {
//       cpf: "123.456.789-10",
//       nome: "Senhora Ipsum Dolor",
//       email: "ipsumdolor@email.com",
//       telefone: "+5581987654321",
//       senha: "ipsumdolor#22",
//       idEndereco: escolherObjetoAleatorio(Enderecos),
//     },
//   },
// },
// {
//   id: 2,
//   codConfirmacao: 1,
//   idQuarto: {
//     id: 2,
//     status: 1,
//     imagename: imagem3,
//     numero: 103,
//     idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
//   },
//   idReserva: {
//     id: 2,
//     dtInicio: "30/03/2023",
//     dtFim: "02/05/2023",
//     confirmada: 0,
//     cpfHospede: {
//       cpf: "987.654.321-00",
//       nome: "Senhorita Dolor Sit Amet",
//       email: "dolorsitamet@email.com",
//       telefone: "+5581976543210",
//       senha: "dolorsitamet#33",
//       idEndereco: escolherObjetoAleatorio(Enderecos),
//     },
//   },
// },
