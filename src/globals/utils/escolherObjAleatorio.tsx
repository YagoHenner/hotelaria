export default function escolherObjetoAleatorio<T>(arrayDeObjetos: T[]): T {
    const indiceAleatorio = Math.floor(Math.random() * arrayDeObjetos.length);
    return arrayDeObjetos[indiceAleatorio];
  }
  