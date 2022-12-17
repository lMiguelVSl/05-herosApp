import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { HerosRoutingModule } from './heros-routing.module';



@NgModule({
  declarations: [
    CreateComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HerosRoutingModule
  ]
})
export class HerosModule { }
