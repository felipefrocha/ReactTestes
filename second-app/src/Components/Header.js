import React from "react";
const Header = ({ logo, alterRender, clicks, clickMe }) => {
  return (
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
      <p>{clicks}</p>
      <button onClick={alterRender}>Alterar Renderização</button>
      <button onClick={clickMe}>Click me!</button>
    </header>
  );
};
export default Header;
