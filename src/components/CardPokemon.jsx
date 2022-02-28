import React from "react";

export default function CardPokemon(props) {
  if (props.pokemon.length !== 0) {
    return (
      <React.Fragment>
        <div className="box">
          <img
            src={props.pokemon.sprites ? props.pokemon.sprites.front_default : ""}
            alt={props.pokemon.name}
          />
        </div>
        <div className="btn">Nome: {props.pokemon.name}</div>
        <div className="btn">Altura: {props.pokemon.height / 10}m</div>
        <div className="btn">Peso: {props.pokemon.weight / 10}Kg</div>
      </React.Fragment>
    );
  }else{
    return(
      <>
      </>
    );
  }

}
