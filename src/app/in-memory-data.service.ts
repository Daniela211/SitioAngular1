import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr. Strange' },
      { id: 12, name: 'Superman' },
      { id: 13, name: 'Flash' },
      { id: 14, name: 'Spiderman' },
      { id: 15, name: 'Iron man' },
      { id: 16, name: 'Hulk' },
      { id: 17, name: 'Bruja Escarlata' },
      { id: 18, name: 'Thor' },
      { id: 19, name: 'Batman' },
      { id: 20, name: 'Wonder Woman' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
