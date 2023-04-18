export type ContextoType = {
    lembrar: boolean;
    ativarLembrar: () => void;
}

export type User =   {
    id: number,
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    //a senha é criptografada no banco. como estamos falando de demonstração,
    //usamos uma senha teste
    senha: string,
  }