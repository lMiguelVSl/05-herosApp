import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HerosService {

  constructor(
    private http: HttpClient
  ) { }

  getHeroes() {
    return this.http.get<Hero[]>('http://localhost:3000/heroes');
  }
}
