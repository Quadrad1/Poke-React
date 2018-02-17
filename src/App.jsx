import React from 'react';

import HeaderApp from './components/HeaderApp';
import PokemonBox from './components/PokemonBox';

import FontAwesomeIcon from 'react-fontawesome'

class App extends React.Component{
    constructor(){
        super();;
        this.state = {
            countPokemons:4,
            pokemons:[]
        }
    } 
    componentDidMount=()=>{
        let all=[];
        for(let i=1;i<this.state.countPokemons;i++){
            all.push(i);
        }
        this.setState({
            pokemons: all
        });
    }

    render(){
        return(
            <main>
                <div className="wrapper poke-app"> 
                    <HeaderApp />
                    <div className="poke-app__pokemons">
                        {this.state.pokemons.map(pok=>{
                            return <PokemonBox 
                                        key={pok}  
                                        pokemon={`https://pokeapi.co/api/v2/pokemon-form/${pok}/`}
                                        moreInfo={`https://pokeapi.co/api/v2/pokemon/${pok}/`}
                                        ability={`https://pokeapi.co/api/v2/ability/${pok}/`}
                                    />
                        })}  
                    </div> 
                </div>
                </main>

        );      
    }
    
}

export default App;