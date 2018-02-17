import React from 'react';
import SearchPokemon from './SearchPokemon'

function HeaderApp (props){
    return(
        <div className = 'poke-app__header'>
            <h2 className="poke-app__title">Pokemons</h2>
            <SearchPokemon />
        </div>
    );
}

export default HeaderApp;