import React from 'react';

function MoreInfo(props){

        
    return(
        <div className={props.className}>
            <div className="pokemon-item__features">
                <span className="pokemon-item__feature">Weight: </span>
                <span className="pokemon-item__feature">{props.moreInfo.weight}</span>
            </div>
            <div className="pokemon-item__features">
                <span className="pokemon-item__feature">Order: </span>
                <span className="pokemon-item__feature">{props.moreInfo.order}</span>
            </div>
            <div className="pokemon-item__features">
                <span className="pokemon-item__feature">Height: </span>
                <span className="pokemon-item__feature">{props.moreInfo.height}</span>
            </div>
            <div className="pokemon-item__features">
                <span className="pokemon-item__feature">Base experience: </span>
                <span className="pokemon-item__feature">{props.moreInfo.base_experience}</span>
            </div>
            <div className="pokemon-item__features">
                <span className="pokemon-item__feature">Generation: </span>
                <span className="pokemon-item__feature">{props.ability.generation.name}</span>
            </div>
            <div className="pokemon-item__features">
                <span className="pokemon-item__feature">Ability: </span>
                <span className="pokemon-item__feature">{props.ability.name}</span>
            </div>
            

            
        </div>
    );
}
export default MoreInfo;