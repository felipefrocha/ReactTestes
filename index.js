/* Statefull component - Lifecicles control and better resolution for states*/
// class Hello extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Component</h1>
//         <h2>Coneúdo Statefull</h2>
//       </div>
//     );
//   }
// }

/*Stateless - dumb components without states but really fast renders */
function Hello() {
  return (
    <div>
      <h1>Hello Component</h1>
      <h2>Coneúdo Stateless</h2>
    </div>
  );
}
ReactDOM.render(<Hello />, document.getElementById("root"));
