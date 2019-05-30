import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Statefull from "./Components/Statefull";
import Stateless from "./Components/Stateless";

function App() {
  let renderThis = true;
  const alterRenderThis = () => {
    renderThis = false;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={alterRenderThis}>Atualize</button>
      </header>
      <body>
        <div style={{ display: "inline-block" }}>
          {renderThis ? (
            <div>
              <Statefull arr={["Força", "Foco", "Fé"]} />
              <Stateless arr={["Determinação", "Objetivo", "Compromisso"]} />
            </div>
          ) : (
            <Stateless arr={["Determinação", "Objetivo", "Compromisso"]} />
          )}
        </div>
      </body>
    </div>
  );
}

export default App;
