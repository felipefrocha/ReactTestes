/*Stateless - Return values dinamicaly*/

const getRandomValues = () => {
  const randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;
};

const displayImage = () => {
  return (
    <div>
      <h3>Conteúdo dinânmico aparece randomicamente!!!</h3>
      <img src="https://i.giphy.com/media/nURpjDx4ac8Xm/giphy.webp" />
    </div>
  );
};

function header(title, num) {
  return <h2>{title + " " + num}</h2>;
}

function Hello({ title, subtitle }) {
  const num = getRandomValues();
  const finalElement = <h3>{subtitle}</h3>;
  if (num === 2) {
    return displayImage();
  }
  return (
    <div>
      {num !== 2 && header(title, num)} {finalElement}
    </div>
  );
}
