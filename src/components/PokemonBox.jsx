import React from 'react';
import MoreInfo from './MoreInfo';

class PokemonBox extends React.Component {
    constructor(props){
        super(props);
        this.state={
            moreInfo: false,
            api:[],
            img:[],
            ability:[],
            apiMoreInfo:[],
            show:false
        }
        this.handleMoreInfo = this.handleMoreInfo.bind(this);
    }
    componentWillMount(){

        fetch('/api',{
            method:'POST',
            body:this.props.pokemon
            })
            .then(response => response.json())
            .then(api => {
                let img = [];
                this.setState({ api });
                for(let sprite in api.sprites){
                    img.push(api.sprites[sprite])
                }
                this.setState({ img });
            })
            .then(()=>{
                fetch('/api',{
                    method:'POST',
                    body:this.props.moreInfo
                    })
                    .then(response => response.json())
                    .then(apiMoreInfo => {
                        this.setState({ apiMoreInfo });
                    })
                    .catch(error => console.error(error));
            })
            .then(()=>{
                fetch('/api',{
                    method:'POST',
                    body:this.props.ability
                    })
                    .then(response => response.json())
                    .then(ability => {
                        this.setState({ 
                            ability,
                            show: !this.state.show
                         });
                    })
                    .catch(error => console.error(error)); 
            })
            .catch(error => console.error(error));
    }
    handleMoreInfo(){
        this.setState({
            moreInfo:!this.state.moreInfo
        });
    }
    render(){
        return(
            
            <div className="poke-app__pokemon-item pokemon-item">
            {this.state.img === [] 
                        ?
                        <div className="pokemon-item__logo__wrap"> 
                            <img src={'https://image.flaticon.com/icons/svg/110/110652.svg'} 
                                alt={'Please wait'}/>
                        </div>
                        :
                        this.state.img.map(src=>{
                            return <div className="pokemon-item__logo__wrap"> <img src={src} alt={src}/></div>
                            
                        })
                      
                    } 
                
                     
                
                <span className="pokemon-item__name">{this.state.api.name}</span>

                <button className="pokemon-item__btn btn" onClick = {this.handleMoreInfo}>More info</button>

                {this.state.show
                    ?
                    <MoreInfo 
                        className={this.state.moreInfo ? 'pokemon-item__all-info' : 'pokemon-item__all-info none'}
                        moreInfo={this.state.apiMoreInfo}
                        ability={this.state.ability}
                    />
                    :
                    ''}
                
            </div>
        );
    }
}
export default PokemonBox;