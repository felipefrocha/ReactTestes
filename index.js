/*Stateless - Return values dinamicaly*/

const getRandomValues = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;
};

const displayImage = () => {
  return (
    <div>
      <h3>Boa Vencestes!!!</h3>
      <img src="https://i.giphy.com/media/nURpjDx4ac8Xm/giphy.webp" />
    </div>
  );
};

function header(num) {
  return <h2>Teste de função dinâmica{num}</h2>;
}

function Hello() {
  const num = getRandomValues();
  const finalElement = <h4>Acaba Aqui</h4>;
  if (num === 2) {
    return displayImage();
  }
  return (
    <div>
      {num !== 2 && header(num)} {finalElement}
    </div>
  );
}
ReactDOM.render(<Hello />, document.getElementById("root"));
