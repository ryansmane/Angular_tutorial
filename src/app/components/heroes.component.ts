import { Component, OnInit } from "@angular/core";
import { Hero } from "../models/hero.interface";
import { MessageService } from '../services/message.service'
import { HEROES } from '../seedData/seedHeroes'
import { HeroService } from '../services/hero.service'
@Component({
  selector: "app-heroes",
  template: `
  <h2>My Heroes</h2>
    <ul class='heroes'>
        <li *ngFor='let hero of heroes' [class.selected]='hero === selectedHero' (click)='onSelect(hero)'>
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
        </ul>     
        <app-hero-detail [hero]='selectedHero'></app-hero-detail>      
        `,
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

    constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit() {
      this.getHeroes()
  }

  onSelect(hero) {
      this.selectedHero = hero;
      this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
}
