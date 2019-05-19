import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  eventos: any;
  /*fazer abaixo a injeção de dependência do http */
  constructor(private http: HttpClient) {}
/*ngOnInit, ele é executado antes da html ficar pronta*/
  ngOnInit() {
    this.getEventos();
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
