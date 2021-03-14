import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

// import { decrementar, incrementar } from './contador/contador.actions';
//para que no se vea una importacion de un monton de acciones entonces lo definimos asi:
import * as actions from './contador/contador.actions';

import { AppState } from './app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * OBSERVACIONES:
   * - el "select('contador')" del store lo usaremos para suscribirnos a un elemento especifico del state
   */

  title = 'redux1';

  contador: number;

  constructor(
    private store: Store<AppState>
  ) {
    this.store
      .select('contador')
      .subscribe(contador => {
        console.log("contador: ", contador);
        this.contador = contador;
      });
  }

  incrementar() {
    this.store.dispatch(actions.incrementar());
  }

  decrementar() {
    this.store.dispatch(actions.decrementar());
  }

  //#region SIN REDUX

  // title = 'redux1';

  // contador: number;

  // constructor(
  //   private store: Store<AppState>
  // ) {
  //   this.contador = 10;
  // }

  // incrementar() {
  //   this.contador++
  // }

  // decrementar() {
  //   this.contador--
  // }

  //#endregion

}
