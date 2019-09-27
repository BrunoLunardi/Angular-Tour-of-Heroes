import { Component, OnInit } from '@angular/core';

// import da classe Hero
import { Hero } from '../hero';
// import do Mock de Hero
import { HEROES } from '../mock-heroes';


// metadados do component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // mock
  heroes = HEROES;
  // variavel para hero selecionado em heroes.component
  selectedHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  // Método chamado no button de heroes.component
  // Seleciona hero que foi clicado na lista de heroes.component.html
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
