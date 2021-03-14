//importación
import React, { useState } from "react";
import words from "lodash/words";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import Result from "./components/Result";

import "./App.css";

//Generación de la función del componente. Función flecha o arrow function
const App = () => {
  //const arrayTextoModificaTexto => ["hola",funcion]
  //1er posición: valor (que inicialmente es el valor por defecto)
  //2da posición: función que permite modificar el valor por defecto

  //Array destructuring
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1] : "0";

  console.log("Renderización de la App",value);
  //lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result value={value}></Result>

      <Numbers
        onClickNumber={(number) => {
          console.log("Click en number", number);
          setStack(`${stack}${number}`); //template literals de ES6
        }}
      ></Numbers>

      <Functions
        onContentClear={() => {
          console.log("Content Clear: ");
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            console.log("onDelete");
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      ></Functions>

      <MathOperations
        onClickOperation={(operation) => {
          console.log("Operation: ", operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log("Equal: ", equal);
          setStack(eval(stack).toString());
        }}
      ></MathOperations>
    </main>
  );
};

//exportación
export default App;
