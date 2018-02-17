import React from 'react';
import PokeButton from './PokeButton';


function SearchPokemon(props){
    return(
        <div className="poke-app__search-box">
            <input type="text" placeholder="Bulbasaur" className="poke-app__serch-input" />
            <PokeButton />
        </div>
    );
}

export default SearchPokemon;