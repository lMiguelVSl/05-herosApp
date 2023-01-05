import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './pages/create/create.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { HerosRoutingModule } from './heros-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { HeroCardComponent } from './components/hero-card/hero-card.component';
import { ImagePipe } from './pipes/image.pipe';



@NgModule({
  declarations: [
    CreateComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    HeroCardComponent,
    ImagePipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HerosRoutingModule,
    MaterialModule
  ]
})
export class HerosModule { }
