import React, { Component } from "react";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard";
import "./PokeDex.css";

export default class PokeDex extends Component {
  static defaultProps = {
    pokemons: [
      { id: 4, name: "Charmander", type: "fire", xp: 62 },
      { id: 7, name: "Squirtle", type: "water", xp: 63 },
      { id: 11, name: "Metapod", type: "bug", xp: 72 },
      { id: 12, name: "Butterfree", type: "flying", xp: 178 },
      { id: 25, name: "Pikachu", type: "electric", xp: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", xp: 95 },
      { id: 94, name: "Gengar", type: "poison", xp: 225 },
      { id: 133, name: "Eevee", type: "normal", xp: 65 }
    ]
  };
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>PokeDex Inital Render</h1>
        <img
          src="http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG5.png"
          alt="Teste"
        />
        <div className="PokeDex-cards">
          {this.props.pokemons.map(cardItem => (
            <PokeCard key={cardItem.id} card={cardItem} />
          ))}
        </div>
      </div>
    );
  }
}
