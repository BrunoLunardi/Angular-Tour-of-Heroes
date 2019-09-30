import { Component, OnInit } from '@angular/core';
//import de service
import { HeroService } from '../hero.service';

// import da classe Hero
import { Hero } from '../hero';
// import do Mock de Hero
//import { HEROES } from '../mock-heroes';

// metadados do component
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // mock
  //heroes = HEROES;
  // variavel para hero selecionado em heroes.component
  selectedHero: Hero;

  // para utilizar service
  heroes: Hero[];

  // contrutor com o parâmtro de service
    //identifica um private e realiza injection
  constructor(private heroService: HeroService) { }

  //depois de chamar constructor o ngOnInit é chamado
  ngOnInit() {

    // chamada do método para receber heroes pelo service
    this.getHeroes();
  }

  // Método chamado no button de heroes.component
  // Seleciona hero que foi clicado na lista de heroes.component.html
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  // obtém heroes pelo service
    //obtém de forma assíncrona devido o Observable em hero.service.ts
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);//subscribe para receber dados do Observable hero.service.ts
  }

}
