import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';

import { Hero } from '../../interfaces/heroes.interface';
import { HerosService } from '../../services/heros.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy{
  
  @Input() heroId: string = ''; 

  heroIdRoute!: Subscription; 
  hero!: Hero;

  constructor(private activatedRoute: ActivatedRoute, private heroService: HerosService) {}

  ngOnInit(): void {
    this.heroIdRoute = this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroService.getHeroById(id))
    )
    .subscribe(hero => {
      this.hero = hero;
    });
  }

  ngOnDestroy(): void {
  if (this.heroIdRoute) this.heroIdRoute.unsubscribe();
  }

}
