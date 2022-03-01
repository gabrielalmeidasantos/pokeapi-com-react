import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./style.css";
import data from "./data.json";

import Header from "./components/Header";
import Escolha from "./components/Escolha";
import BoxContainer from "./components/BoxContainer";
import Formulario from "./components/Formulario";
import Main from "./components/Main";
import CardPokemon from "./components/CardPokemon";

function App() {
  const [pokemon, setPokemon] = useState([]);

  return (
    <React.Fragment>
      <Header title={data.title} />
      <Escolha>
          <BoxContainer />
        <BoxContainer>
          <Formulario
            idFormulario="form1"
            idInput="busca1"
            setPokemon={setPokemon}
            pokemon={pokemon}
          />
        </BoxContainer>
      </Escolha>
      <Main>
        <BoxContainer/>
        <BoxContainer>
          <CardPokemon pokemon={pokemon} />
        </BoxContainer>
      </Main>
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.Fragment>
    <App />
  </React.Fragment>,
  document.getElementById("app")
);
