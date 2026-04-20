import { Routes } from '@angular/router';
import { PokemonList } from './pages/pokemon-list/pokemon-list';
import { PokemonDetail } from './pages/pokemon-detail/pokemon-detail';

export const routes: Routes = [
    { path: 'pokemonlist', component: PokemonList},
    { path: 'pokemondetail', component: PokemonDetail},
    { path: '', redirectTo: 'pokemonlist', pathMatch: 'full'}
];
