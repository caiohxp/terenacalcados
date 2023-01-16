import { TipoProduto } from "./tipo-produto";

export class Product {
    nome: string;
    tamanho: any;
    tipo: TipoProduto;
    constructor(nome: string, tipo: TipoProduto){
      this.nome = nome;
      this.tipo = tipo;
    }
  }
