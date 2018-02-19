import React from 'react';

import HeaderApp from './components/HeaderApp';
import PokemonBox from './components/PokemonBox';
import Pagination from './components/Pagination'


class App extends React.Component{
    constructor(){
        super();
        this.state = {
            countPokemons:20,
            pokemonsPage:4,
            pokemons:[],
            currentPage:1
        }
    } 
    changeCurrentPage=(currentPage)=>{
        this.setState({ currentPage });
        let all=[];
        for(let i=currentPage * 4 - 3;i<=currentPage * 4;i++){
            all.push(i);
        }
        console.log(all);
        this.setState({
            pokemons: all
        });
    }
    componentDidMount=()=>{
        let all=[];
        for(let i=this.state.currentPage;i<this.state.currentPage + 4;i++){
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
                    <Pagination 
                        mount={this.state.countPokemons} 
                        currentPage={this.state.currentPage}
                        handleCerrentPage={this.changeCurrentPage}
                        />
                </div>
                
                </main>

        );      
    }
    
}

export default App;
