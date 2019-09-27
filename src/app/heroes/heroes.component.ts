import { Component, OnInit } from '@angular/core';

// importa da classe Hero
import { Hero } from '../hero';


// metadados do component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // inicializa objeto do tipo Hero
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  constructor() { }

  ngOnInit() {
  }

}
