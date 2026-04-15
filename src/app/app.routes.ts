import { Routes } from '@angular/router';
import { PokemonList } from './pages/pokemon-list/pokemon-list';

export const routes: Routes = [
    { path: 'pokemonlist', component: PokemonList},
    { path: '', redirectTo: 'pokemonlist', pathMatch: 'full'}
];
