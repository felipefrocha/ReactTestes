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
        <h1>
          PokeDex
          {this.props.winner ? <strong>Winner</strong> : ""}
          Render
        </h1>
        <div className="PokeDex-cards">
          {this.props.pokemons.map(cardItem => (
            <PokeCard key={cardItem.id} card={cardItem} />
          ))}
        </div>
      </div>
    );
  }
}
