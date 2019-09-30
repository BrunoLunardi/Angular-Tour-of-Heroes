// Obtém dados de heroes via service
import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  //contrutor para injection de messageService
  constructor(private messageService: MessageService) {}

  //retorna os heroes (do mock da model: src/app/hero.ts)
    // src/app/mock-heroes.ts
  //Observable permite obter dados de forma assíncrona
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    return of(HEROES);
  } 
}
