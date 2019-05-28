const LuckCard = ({ num, title }) => {
  const fruits = {
    f1: "🍒",
    f2: "🍓",
    f3: "🍎",
    f4: "🍌"
  };

  const finalNumber = num % 4;

  return (
    <div>
      <div style={{backgroundColor: lightgray}}>{fruits[num]}</div>
    </div>;
  )
};
