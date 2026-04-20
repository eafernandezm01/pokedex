import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon-service';

@Component({
  selector: 'app-pokemon-detail',
  imports: [],
  templateUrl: './pokemon-detail.html',
  styleUrl: './pokemon-detail.css',
})
export class PokemonDetail implements OnInit{

  habilidades!:string[];


  constructor (private pokemonService: PokemonService){}

  ngOnInit():void{
    this.pokemonService.getPokemonDetail('ditto').subscribe ((data) => {
      console.log (data);
      console.log (data.abilities);

      data.abilities.forEach((aux: any) => {
        console.log ('aux', aux.ability.name);
      });

    });
  }

}
