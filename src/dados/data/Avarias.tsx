import { Funcionarios } from "./Funcionarios";
import escolherObjetoAleatorio from "../../globals/utils/escolherObjAleatorio";

export const Avarias = [
  {
    id: 0,
    item: "Lâmpada",
    dtRegistro: "21/04/2023",
    idQuarto: 1,
    idFuncionario: escolherObjetoAleatorio(Funcionarios),
  },
  {
    id: 1,
    item: "Toalha",
    dtRegistro: "02/04/2023",
    idQuarto: 1,
    idFuncionario: escolherObjetoAleatorio(Funcionarios),
  },
  {
    id: 2,
    item: "Travesseiro",
    dtRegistro: "08/04/2023",
    idQuarto: 1,
    idFuncionario: escolherObjetoAleatorio(Funcionarios),
  },
  {
    id: 3,
    item: "Cortina",
    dtRegistro: "14/04/2023",
    idQuarto: 2,
    idFuncionario: escolherObjetoAleatorio(Funcionarios),
  },
  {
    id: 4,
    item: "Controle remoto da TV",
    dtRegistro: "18/04/2023",
    idQuarto: 2,
    idFuncionario: escolherObjetoAleatorio(Funcionarios),
  },
  {
    id: 5,
    item: "Cadeira",
    dtRegistro: "25/04/2023",
    idQuarto: 3,
    idFuncionario: escolherObjetoAleatorio(Funcionarios),
  },
];
