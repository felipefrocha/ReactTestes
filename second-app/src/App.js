import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Statefull from "./Components/Statefull";
import Stateless from "./Components/Stateless";

function App() {
  let renderThis = true;
  const alterRenderThis = () => {
    renderThis = false;
  };

  return (
    <div className="App">
      <Header logo={logo} />
      <main>
        <div>
          {renderThis ? (
            <div style={{ display: "inline-block" }}>
              <Statefull arr={["Força", "Foco", "Fé"]} />
              <Stateless arr={["Determinação", "Objetivo", "Compromisso"]} />
            </div>
          ) : (
            <Stateless arr={["Determinação", "Objetivo", "Compromisso"]} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
