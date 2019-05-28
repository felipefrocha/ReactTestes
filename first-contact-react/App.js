const App = () => {
  return (
    <div>
      <Hello
        title={"React props"}
        subtitle={"True begining of react - only props"}
      />
      <LuckCard num={2} title="Fruit:" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
