import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  _filtroLista: string;
  get filtroLista(): string {
    return this._filtroLista
  }
  set filtroLista(value: string){
    this._filtroLista = value;
    this.eventosFiltrados = this.filtroLista ? 
    this.filtrarEventos(this.filtroLista) :
    this.eventos;
  }

  eventosFiltrados: any = [];
  eventos: any = [];
  imagemLargura = 50;
  imagemMargem = 3;
  mostrarImagem = false;

  /*fazer abaixo a injeção de dependência do http */
  constructor(private http: HttpClient) {}
/*ngOnInit, ele é executado antes da html ficar pronta*/
  ngOnInit() {
    this.getEventos();
  }

  filtrarEventos(filtrarPor: string): any {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.eventos.filter(
      evento => evento.tema.toLocaleLowerCase().indexOf(filtrarPor)
       !== -1
    );
  }

  alternarImagem(){
    this.mostrarImagem = !this.mostrarImagem;
  }

  /*uma função "getEventos, que tem o atributo eventos que
  recebe algo, no caso faremos uma chamada https, para isso */
  /*apos fazer a injeção de dependência acima, já posso
  fazer a chamada a minha API abaixo*/

  getEventos() {
    this.http.get('http://localhost:5000/api/values').subscribe(
      response => {
        this.eventos = response;
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }
}
