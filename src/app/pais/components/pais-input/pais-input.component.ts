import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  constructor() { }

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();
  termino: string = '';

  ngOnInit(){
    this.debouncer.subscribe(valor => {
      console.log('debouncer:', valor);
    })
  }
  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any){
    const valor = event.target.value;
    console.log(event);
    console.log('valor', valor);
  }
}
