import { Component, OnInit } from '@angular/core';
import { IPokemonList } from '../../model/IPokemonList';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-list',
  imports: [],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList implements OnInit {
  pokemonList!: IPokemonList[];

  constructor(private pokemonService: PokemonService) {}

  /* 
  *  Método de la interfaz OnInit
  *  se ejecuta después de inicializar el componente.
  *  Se usa para invocar a servicios, inicializar datos...
  */
  ngOnInit(): void {
    // Para invocar a servicios
    this.pokemonList = this.pokemonService.getPokemonList();
  }
}
