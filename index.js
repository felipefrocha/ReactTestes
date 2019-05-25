/*Stateless - JS insted of JSX*/
function Hello() {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Hello Component"),
    React.createElement("h2", null, "Conte\xFAdo JS direto sem babel")
  );
}
ReactDOM.render(<Hello />, document.getElementById("root"));
