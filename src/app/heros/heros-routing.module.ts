import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { CreateComponent } from './pages/create/create.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'edit/:id',
        component: CreateComponent
      },
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: ':id',
        component: HeroComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HerosRoutingModule { }
