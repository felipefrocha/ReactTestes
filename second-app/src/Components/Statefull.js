import React, { Component } from "react";

export default class Stetefull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }
  // Acontece antes do método de renderização
  componentWillMount() {
    console.log("Este componente será inicializado");
  }
  // Acontece logo apos o método de renderização
  componentDidMount() {
    console.log("Este componente acabou de inicializar");
  }
  // Acontece na renderização quando o props é atualizado
  componentDidUpdate() {
    console.log("Este componente acabou de atualizar");
  }
  // Acontece quando o componente não executará mais a renderização (saindo do componente)
  componentWillUnmount() {
    console.log("Este componente será desmontado");
  }
  // Convencionado que a alteração do state não seja feito diretamente, apenas atravez da chamada da função
  setState(newState) {
    this.setState({
      ...this.state,
      newState //pode ou ser um objeto, um atributo, ou ainda um valor (lembrar de modifiar de acordo com o necessário)
    });
  }

  retornaProps() {
    return this.props.arr.map(prop => <p>{prop}</p>);
  }
  retornaState() {
    return this.state.arr.map((state, key) => (
      <p key={key * Math.random()}>{state}</p>
    ));
  }

  // Método de renderização do componente
  render() {
    return (
      <div>
        <h1>Componente completo</h1>
        <h2>Props do componente</h2>
        {this.retornaProps()}
        <h3>State do componente</h3>
        <div>{this.retornaState()}</div>
      </div>
    );
  }
}
