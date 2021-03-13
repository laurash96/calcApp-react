//importación
import React, { useState } from "react";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import Result from "./components/Result";

import "./App.css";

//Generación de la función del componente. Función flecha o arrow function
const App = () => {
  const arrayTextoModificaTexto = useState(""); //valor inicial

  //const arrayTextoModificaTexto => ["hola",funcion]
  //1er posición: valor (que inicialmente es el valor por defecto)
  const texto = arrayTextoModificaTexto[0];

  //2da posición: función que permite modificar el valor por defecto
  const funcionModificaTexto = arrayTextoModificaTexto[1];

  console.log("Renderización de la App");
  //lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result value={texto}></Result>
      <Numbers
        onClickNumber={(number) => {
          console.log("Click en number", number);
          funcionModificaTexto(number);
        }}
      ></Numbers>
      <Functions
        onContentClear={() => console.log("Content Clear: ")}
        onDelete={() => console.log("onDelete")}
      ></Functions>
      <MathOperations
        onClickOperation={(operation) => console.log("Operation: ", operation)}
        onClickEqual={(equal) => console.log("Equal: ", equal)}
      ></MathOperations>
    </main>
  );
};

//exportación
export default App;
