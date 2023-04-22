export type ContextoType = {
    user: User | null;
    signIn: (email: string, senha: string) => void;
    tipo: number;
    logOut: () => void;
}

export type User = {
    //o cpf é a foreign key de User
    cpf: string,
    nome: string,
    email: string,
    telefone: string,
    idEndereco?: Endereco,
    senha: string,
  }

export type Endereco = {
    id: number;
    logradouro: string;
    bairro: string;
    cidade: string;
    numero: number;
    pais: string;
}

export type Quarto = {
    id: number,
    status: number,
    pic: string,
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

export type Gasto = {
id: number,
valor: number,
descricao: string,
dtGasto: string,
idOcupacao: number,
}

export type Ocupação = {
id: number,
codConfirmacao: number,
idQuarto: number,
idReserva: number,
}

export type Reserva = {
id: number,
dtInicio: string,
dtFim: string,
confirmada: number,
cpfHospede: string,
}

export type Avaria = {
    id: number,
    dtRegistro: string,
    item: string,
    idQuarto: number,
    idFuncionario: User;
}