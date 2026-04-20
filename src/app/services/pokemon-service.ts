import { Injectable } from '@angular/core';
import { IPokemonList } from '../model/IPokemonList';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  
  constructor(private http: HttpClient){}

  getPokemonDetail (nombre:string): Observable<any>{
                        //https://pokeapi.co/api/v2/pokemon/ditto
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${nombre}`);
    // return this.http.get('https://pokeapi.co/api/v2/pokemon/' + nombre);
  }


  getAsyncPokemonList():Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  }


  getPokemonList():IPokemonList[]{
    return [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
      {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
      {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
      },
      {
        name: 'charizard',
        url: 'https://pokeapi.co/api/v2/pokemon/6/',
      },
      {
        name: 'squirtle',
        url: 'https://pokeapi.co/api/v2/pokemon/7/',
      },
    ];
  }
}
