import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../services/hero.service";
import { Hero } from "../models/hero.interface";

@Component({
  selector: "app-hero-detail",
  template: `
    <div *ngIf="hero">
      <h2>{{ hero.name | uppercase }} Details</h2>
      <div><span>id: </span>{{ hero.id }}</div>
      <div>
        <label
          >name:
          <input [(ngModel)]="hero.name" placeholder="name" />
        </label>
      </div>
      <button (click)="goBack()">go back</button>
    </div>
  `,
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetail implements OnInit {
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }
  goBack(): void {
    this.location.back();
  }
}
