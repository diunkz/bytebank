import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;
  // destino: number;
  // valor: number;

  transferir($event) {
    console.log($event);
    this.transferencia = $event;
    // this.destino = $event.destino;
    // this.valor = $event.valor;
  }
}
