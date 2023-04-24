import imagem1 from "../images/quartos/1.png";
import imagem2 from "../images/quartos/2.png";
import imagem3 from "../images/quartos/3.png";

import { Enderecos } from "./Enderecos";
import { TiposQuarto } from "./TiposQuarto";
import escolherObjetoAleatorio from "../../globals/utils/escolherObjAleatorio";

export const Ocupações = [
  {
    id: 0,
    codConfirmacao: 1,
    idQuarto: {
      id: 0,
      status: 1,
      pic: imagem1,
      numero: 101,
      idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
    },
    idReserva: {
      id: 0,
      dtInicio: "21/03/2023",
      dtFim: "26/04/2023",
      confirmada: 0,
      cpfHospede: {
        cpf: "490.522.840-91",
        nome: "Senhor Lorem Ipsun",
        email: "loremipsuno@email.com",
        telefone: "+558198121289",
        senha: "loremipsun#11",
        idEndereco: escolherObjetoAleatorio(Enderecos),
      },
    },
  },
  {
    id: 1,
    codConfirmacao: 0,
    idQuarto: {
      id: 1,
      status: 0,
      pic: imagem2,
      numero: 102,
      idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
    },
    idReserva: {
      id: 1,
      dtInicio: "25/03/2023",
      dtFim: "30/04/2023",
      confirmada: 1,
      cpfHospede: {
        cpf: "123.456.789-10",
        nome: "Senhora Ipsum Dolor",
        email: "ipsumdolor@email.com",
        telefone: "+5581987654321",
        senha: "ipsumdolor#22",
        idEndereco: escolherObjetoAleatorio(Enderecos),
      },
    },
  },
  {
    id: 2,
    codConfirmacao: 1,
    idQuarto: {
      id: 2,
      status: 1,
      pic: imagem3,
      numero: 103,
      idTipoQuarto: escolherObjetoAleatorio(TiposQuarto),
    },
    idReserva: {
      id: 2,
      dtInicio: "30/03/2023",
      dtFim: "02/05/2023",
      confirmada: 0,
      cpfHospede: {
        cpf: "987.654.321-00",
        nome: "Senhorita Dolor Sit Amet",
        email: "dolorsitamet@email.com",
        telefone: "+5581976543210",
        senha: "dolorsitamet#33",
        idEndereco: escolherObjetoAleatorio(Enderecos),
      },
    },
  },
];
