import React from "react";
import PropTypes from "prop-types";
import "./PokeCard.css";
import { pad } from "../Utils/functions";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const POKE_FANCY_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

const PokeCard = ({ card }) => {
  console.log(card);
  const imgSrc = `${POKE_FANCY_API}${pad(card.id, 3)}.png`;
  return (
    <div className="PokeCard">
      <h3>{card.name}</h3>
      <img className="PokeCard-image" src={imgSrc} />
      <p>
        <strong>Tipo: </strong> {card.type}
        <br />
        <strong>Poder: </strong> {card.xp}
      </p>
    </div>
  );
};

export default PokeCard;
