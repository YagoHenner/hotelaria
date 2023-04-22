import { Gasto } from "../types";

export default function somarPropriedades<T>(
  arrays: T[],
  propriedade: keyof T
): number {
  return arrays.reduce((valorTotal, item) => valorTotal + item[propriedade], 0);
}
