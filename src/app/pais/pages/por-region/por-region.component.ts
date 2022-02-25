import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button{
      margin-right: 6px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  constructor(private paisService: PaisService) { }

  regiones : string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  paises: Country[] =[];
  regionActiva: string = '';
  ngOnInit(): void {
  }

  getClaseCss(region: string){
    return (region === this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  buscarRegion(region: string){
    this.regionActiva= region;
    this.paisService.buscarRegion(region)
    .subscribe(paises =>{
        this.paises = paises;
    })
  }

}
