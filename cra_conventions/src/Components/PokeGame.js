import React, { Component } from "react";
import PropTypes from "prop-types";
import PokeDex from "./PokeDex";
import "./PokeGame.css";

export default class PokeGame extends Component {
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
    this.state = {};
  }
  componentDidMount() {}

  randomDist() {
    let firstDex = [];
    let secondDex = [...this.props.pokemons];
    let a = 0;
    while (firstDex.length < secondDex.length) {
      a = Math.floor(Math.random() * secondDex.length);
      console.log(a, firstDex.length, secondDex.length);
      let temp = secondDex.splice(a, 1)[0];
      console.log(temp);
      firstDex.push(temp);
    }
    return { firstDex, secondDex };
  }

  render() {
    let game = this.randomDist();

    let winner =
      game.firstDex.reduce((total, a) => total + a.xp, 0) >
      game.secondDex.reduce((total, a) => total + a.xp, 0);

    this.randomDist();
    return (
      <div className="PokeGame">
        <img
          src="http://pngimg.com/uploads/pokemon_logo/pokemon_logo_PNG5.png"
          alt="Teste"
        />
        <PokeDex pokemons={game.firstDex} winner={winner} />
        <PokeDex pokemons={game.secondDex} winner={!winner} />
      </div>
    );
  }
}
