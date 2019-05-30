import React, { Component } from "react";
import PropTypes from "prop-types";
import PokeCard from "./PokeCard";
import "./PokeDex.css";

export default class PokeDex extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.winner ? (
          <h1 className="PokeDex-winner">PokeDex Wins</h1>
        ) : (
          <h1 className="PokeDex-loser">PokeDex Lose</h1>
        )}
        <div className="PokeDex-cards">
          {this.props.pokemons.map(cardItem => (
            <PokeCard key={cardItem.id} card={cardItem} />
          ))}
        </div>
      </div>
    );
  }
}
