import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [],
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    /*this.activatedRoute.params
      .subscribe(({ id }) => {
        this.paisService.getPaisPorAlpha(id)
        .subscribe((pais) => {
          console.log(pais);
      });
    });*/
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.paisService.getPaisPorAlpha(id))
      )
      .subscribe((pais) => {
          console.log(pais);
      });
    }

}
