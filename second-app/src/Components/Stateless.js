import React from "react";

const Stateless = ({ arr }) => {
  const retorno = function retornaProps() {
    return arr.map((prop, index) => <p key={index}>{prop}</p>);
  };

  return (
    <div>
      <h1>Componente Steteless</h1>
      <h2>Props do componente stateless</h2>
      {retorno()}
    </div>
  );
};

export default Stateless;
