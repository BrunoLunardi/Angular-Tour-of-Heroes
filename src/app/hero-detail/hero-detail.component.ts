// Import com input para fazer bind com esta classe
import { Component, OnInit, Input } from '@angular/core';
// Import da classe Hero
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  // Ligação para utilizar esta classe com o tipo Hero
  @Input()
  hero: Hero;

  ngOnInit() {
  }

}
