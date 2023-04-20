import { Funcionarios } from "../../dados/data/Funcionarios";
import { Usuarios } from "../../dados/data/Usuarios";
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
    Usuarios.forEach((item: User) => {
      if (item.email === email && item.senha === senha) {
        user = item;
        tipo = 1;
      }
    });
  }

  return user ? { tipo: tipo, user: user } : null;
}
