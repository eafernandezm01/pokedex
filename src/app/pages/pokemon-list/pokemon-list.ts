import { Component, OnInit } from '@angular/core';
import { IPokemonList } from '../../model/IPokemonList';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList implements OnInit {
  pokemonList!: IPokemonList[];

  constructor() {}

  /* 
  *  Método de la interfaz OnInit
  *  se ejecuta después de inicializar el componente.
  *  Se usa para invocar a servicios, inicializar datos...
  */
  ngOnInit(): void {
    // Para invocar a servicios
    this.pokemonList = [
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
