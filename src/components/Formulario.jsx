import React, { useEffect } from "react";
import axios from "axios";

export default function Formulario(props) {

  useEffect(() => {
    var input = document.querySelector(`#${props.idInput}`);
    var form = document.querySelector(`#${props.idFormulario}`);
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nomePokemon = input.value.toLowerCase();

      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
        .then((response) => {
          props.setPokemon(response.data);
        });
      });
    }, [props]);

  return (
    <React.Fragment>
      <form id={props.idFormulario}>
        <input
          type="text"
          id={props.idInput}
          placeholder="Nome do Pokemon"
          required
        />
        <button>Buscar</button>
      </form>
    </React.Fragment>
  );
}
