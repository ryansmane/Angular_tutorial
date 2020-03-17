import  { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service'
import { Hero } from '../models/hero.interface'

@Component({
    selector: 'app-dashboard',
    template: `
    <h3>Top Heroes</h3>
    <div class='grid grid-pad'>
        <a *ngFor='let hero of heroes' routerLink='/detail/{{hero.id}}' class='col-1-4'>
            <div class='module hero'>
                <h4>{{hero.name}}</h4>
            </div>
        </a>
    </div>
    `,
    styleUrls: ['./dashboard.component.css']
})
export class Dashboard implements OnInit {
    heroes: Hero[];

    constructor(private heroService: HeroService) {

    }

    ngOnInit() {
        this.getHeroes();
    }

    getHeroes(): void {
        this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
    }
}