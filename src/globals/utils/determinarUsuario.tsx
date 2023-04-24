import { Funcionarios } from "../../dados/data/Funcionarios";
import { Hospedes } from "../../dados/data/Hospedes";
import { User } from "../types";

export default function determinarUsuario(email: string, senha: string) {
  let user = null;
  let tipo = 29348;

  Funcionarios.forEach((item: User) => {
    if (item.email === email && item.senha === senha) {
      user = item;
      tipo = 0;
    }
  });

  if (!user) {
    Hospedes.forEach((item: User) => {
      if (item.email === email && item.senha === senha) {
        user = item;
        tipo = 1;
      }
    });
  }

  return { tipo: tipo, user: user };
}
