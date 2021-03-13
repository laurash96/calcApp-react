//importación
import React from "react";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Functions from "./components/Functions";
import Result from "./components/Result";

import "./App.css";

//Generación de la función del componente. Función flecha o arrow function
const App = () => {
  console.log("Renderización de la App");
  //lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result></Result>
      <Numbers
        onClickNumber={(number) => console.log("Click en number", number)}
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
