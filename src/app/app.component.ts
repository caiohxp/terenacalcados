import { Component } from '@angular/core';
import { Product } from './product';
import { TipoProduto } from './tipo-produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = {
    firstName: "Terena",
    secondName: "Calçados"
  };
  tipo: TipoProduto = TipoProduto.Bolsa;
  filtro = false;
  modalContent: Product = new Product("",TipoProduto.Bolsa);
  products = [
  new Product("bolsa", TipoProduto.Bolsa),new Product("cdourado", TipoProduto.Calcado),new Product("cmostarda",TipoProduto.Calcado),new Product("cpreto1", TipoProduto.Calcado),new Product("cpreto2",TipoProduto.Calcado)
  ];
  tamanhos = [35,36,37,38];
  filtroProdutos(products: Product[]): Product[] {
    return this.filtro? products.filter(p => p.tipo == this.tipo) : products;
  }
  semFiltro(){
    this.filtro = false;
  }
  filtroCalcado(){
    this.filtro = true;
    this.tipo = TipoProduto.Calcado;
  }
  filtroBolsa(){
    this.filtro = true;
    this.tipo = TipoProduto.Bolsa;
  }
  modal(product: Product){
    this.modalContent = product;
  }
  setTamanho(tamanho: number){
    this.modalContent.tamanho = tamanho;
    const divtamanho = document.querySelector(".tamanho")
    divtamanho?.setAttribute("style", "display:block;")
  }
}
