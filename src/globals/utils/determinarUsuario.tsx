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

  return { tipo: tipo, user: user };
}

{
  /*interface ComidaContextType {
  comida: Comida | null;
  setComida: React.Dispatch<React.SetStateAction<Comida | null>>;
}
Crie um provedor de contexto que inicialize o estado com o valor do localStorage e forneça as funções setComida e comida:
typescript
Copy code
import React, { useState } from "react";

const ComidaContext = React.createContext<ComidaContextType>({
  comida: null,
  setComida: () => {},
});

const ComidaProvider: React.FC = ({ children }) => {
  const [comida, setComida] = useState<Comida | null>(
    JSON.parse(localStorage.getItem("comida") || "null")
  );

  return (
    <ComidaContext.Provider value={{ comida, setComida }}>
      {children}
    </ComidaContext.Provider>
  );
};
Em seguida, crie um componente que use o provedor de contexto e implemente a lógica para encontrar a comida e armazenar o id no localStorage:
typescript
Copy code
import React, { useContext, useState } from "react";

const ComidaFinder = () => {
  const { setComida } = useContext(ComidaContext);
  const [nomeComida, setNomeComida] = useState("");

  const procurarComida = () => {
    const comidaEncontrada = comidas.find(
      (comida) => comida.nome === nomeComida
    );

    if (comidaEncontrada) {
      localStorage.setItem("comida", comidaEncontrada.id.toString());
      setComida(comidaEncontrada);
    }
  };

  return (
    <>
      <input
        type="text"
        value={nomeComida}
        onChange={(e) => setNomeComida(e.target.value)}
      />
      <button onClick={procurarComida}>Procurar</button>
    </>
  );
};
Para usar o provedor de contexto em um componente filho, você pode simplesmente importá-lo e envolver o componente em torno do componente filho:
typescript
Copy code
import { ComidaProvider } from "./ComidaContext";

const App = () => {
  return (
    <ComidaProvider>
      <ComidaFinder />
    </ComidaProvider>
  );
};
Dessa forma, você pode armazenar o estado da comida em um contexto com o valor padrão do localStorage e permitir que outros componentes acessem e atualizem esse estado.*/
}
