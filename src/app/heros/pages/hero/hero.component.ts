import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit, OnDestroy{
  
  @Input() heroId: string = ''; 

  heroIdRoute: Subscription | undefined; 

  constructor(private activatedRoute: ActivatedRoute) {
        
  }

  ngOnInit(): void {
    this.heroIdRoute = this.activatedRoute.params
    .subscribe(({id}) => console.log(id));
  }

  ngOnDestroy(): void {
  if (this.heroIdRoute) this.heroIdRoute.unsubscribe();
  }

}
