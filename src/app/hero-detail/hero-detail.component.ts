// Import com input para fazer bind com esta classe
import { Component, OnInit, Input } from '@angular/core';
// Import da classe Hero
import { Hero } from '../hero';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService }  from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // Ligação para utilizar esta classe com o tipo Hero
  @Input()
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  //pesquisa heroe pela id passada na url para trazer os detalhes dele
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }  

  //navega para a página anterior
  goBack(): void {
    this.location.back();
  }

}
