import {Injectable} from '@angular/core';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service'
import { Hero } from '../models/hero.interface';
import { HEROES } from '../seedData/seedHeroes';

@Injectable({
    providedIn: 'root'
})
export class HeroService {
    
     constructor(private messageService: MessageService) {}

    getHeroes(): Observable<Hero[]> {
        this.messageService.add('fetched');
        return of(HEROES);
    }

    getHero(id:number): Observable<Hero> {
        return of(HEROES.find(hero => hero.id === id));
    }
}