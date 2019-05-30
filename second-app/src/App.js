import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Statefull from "./Components/Statefull";
import Stateless from "./Components/Stateless";

class App extends Component {
  constructor() {
    super();
    this.state = {
      renderThis: true,
      clicks: 0
    };
  }

  alterRenderThis = () => {
    this.setState({ renderThis: !this.state.renderThis });
  };
  clickMe() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    return (
      <div className="App">
        <Header
          logo={logo}
          alterRender={() => this.alterRenderThis(this.state.renderThis)}
          clickMe={this.clickMe} //Vai quebrar pois perdeu o contexto de this
        />
        <main>
          <div>
            {this.state.renderThis ? (
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
}

export default App;
