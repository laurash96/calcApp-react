//importación
import React from "react";
import Button from "./components/Button";
import Result from "./components/Result";

import "./App.css";

//Generación de la función del componente. Función flecha o arrow function
const App = () => {
  console.log("Renderización de la App");

  const clickHandlerFunction = text =>{//si es un solo parámetro no se suele poner paréntesis
    console.log(text)
  }
  //lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result></Result>
      <div className="numbers">
        <Button
          text="1"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="2"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="3"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="4"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="5"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="6"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="7"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="8"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="9"
          clickHandler={clickHandlerFunction}>
        </Button>
        <Button
          text="0"
          clickHandler={clickHandlerFunction}>
        </Button>
      
      </div>
      <div className="functions">
        <button>Clear</button>
        <button>D</button>
      </div>
      <div className="math-operations">
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
        <button>=</button>
      </div>
    </main>
  );
};

//exportación
export default App;
