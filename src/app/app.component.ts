import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];
  // destino: number;
  // valor: number;

  transferir($event) {
    console.log($event);
    const transferencia = { ...$event, data: new Date() };
    this.transferencias.push(transferencia);
    // this.destino = $event.destino;
    // this.valor = $event.valor;
  }
}
