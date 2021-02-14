//importación
import React from "react";
import "./App.css";
import Result from "./components/Result";

//Generación de la función del componente. Función flecha o arrow function
const App = () => {
  console.log("Renderización de la App");
  //lo que ejecuta la función
  return (
    <main className="react-calculator">
      <Result></Result>
      <div className="numbers">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
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
