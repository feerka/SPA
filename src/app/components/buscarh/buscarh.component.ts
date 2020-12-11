import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-buscarh',
  templateUrl: './buscarh.component.html'
})
export class BuscarhComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string;
  constructor( private activatedRoute: ActivatedRoute  , private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( params => {
     this.termino = params['termino'];
     this.heroes = this.heroesService.buscarHeroe(params ['termino']);
     console.log(this.heroes)
      });

}


}
