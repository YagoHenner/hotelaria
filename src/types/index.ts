export type ContextoType = {
    tipo: number;
    ativarTipo: (value: number) => void;
    logOut: () => void;
}

export type User = {
    id: number,
    nome: string,
    email: string,
    cpf: string,
    telefone: string,
    //a senha é criptografada no banco. como estamos falando de demonstração,
    //usamos uma senha teste
    senha: string,
  }

export type Quarto = {
    id: number,
    status: number,
    nome: string,
    pic: any,
    local: string,
    numero: number,
    idTipoQuarto: TipoQuarto,
}

export type TipoQuarto = {
    id: number,
    nome: string,
    descricao: string,
    capacidade: number,
    camaCasal: number,
    camaSolteiro: number,
    diaria: number,
}