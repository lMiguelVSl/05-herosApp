import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit{
  
  @Input() heroId: string = ''; 

  ngOnInit(): void {
    console.log();
  }

}
