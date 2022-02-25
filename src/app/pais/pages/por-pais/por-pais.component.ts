import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisSugerido: Country[] = [];
  mostrarSugerencias: boolean = false;


  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias= false;

    console.log('paises', this.paises);
    this.paisService.buscar(termino).subscribe(
      (paises) => {
        console.log('paises', paises);
        this.paises = paises;
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias= true;

    this.paisService.buscar(termino).subscribe(
      (paises) => {
        this.paisSugerido = paises.splice(0,5);
      },
      (err) => {
        this.hayError = true;
        this.paisSugerido = [];
      }
    );
  }
  /*buscarSugerido(termino: string){
    console.log('Buscando..' + termino);
     this.buscar(termino);


  }*/
}
