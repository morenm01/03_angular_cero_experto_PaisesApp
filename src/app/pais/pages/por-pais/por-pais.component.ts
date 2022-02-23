import { Component } from '@angular/core';
import { SearchCountriesResponse } from '../../interfaces/search-countries-response';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [],
})
export class PorPaisComponent {
  termino: string = '';
  hayError: boolean = false;

  constructor(private paisService: PaisService) {}

  get paises() {
    return this.paisService.paises;
  }

  buscar() {
    this.hayError = false;
    console.log(this.paises);
    this.paisService.buscar(this.termino).subscribe(
      (resp: SearchCountriesResponse) => {
        console.log(resp);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
