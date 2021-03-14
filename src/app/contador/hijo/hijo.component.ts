import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  contador: number;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store
      .select('contador')
      .subscribe(contador => {
        this.contador = contador;
      })
  }

  multiplicar() {
    this.store.dispatch(actions.multiplicar({ numero: 2 }));
  }
  dividir() {
    this.store.dispatch(actions.dividir({ numero: 2 }));
  }

  //#region SIN REDUX


  // @Input() contador: number;
  // @Output() cambioContador = new EventEmitter<number>();

  // constructor() { }

  // ngOnInit(): void {
  // }

  // multiplicar() {
  //   this.contador *= 2;
  //   this.cambioContador.emit(this.contador);
  // }
  // dividir() {
  //   this.contador /= 2;
  //   this.cambioContador.emit(this.contador);
  // }

  // resetNieto(valorDeNieto: number) {
  //   this.contador = valorDeNieto;
  //   this.cambioContador.emit(this.contador);
  // }

  //#endregion

}
