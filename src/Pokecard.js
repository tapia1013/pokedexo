import React, { Component } from 'react';
import './Pokecard.css';

// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);


class Pokecard extends Component {
  render() {
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name} />
        </div>
        <div className="Pokecard-data">Type: {this.props.type}</div>
        <div className="Pokecard-data">EXP: {this.props.exp}</div>
      </div>
    )
  }
}



export default Pokecard;



























// pokemons = [
//   { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
//   { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
//   { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
//   { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
//   { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
//   { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
//   { id: 4, name: 'Gengar', type: 'poison', base_experience: 225 },
//   { id: 4, name: 'Eevee', type: 'normal', base_experience: 65 }
// ];