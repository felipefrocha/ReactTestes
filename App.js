const App = () => {
  return (
    <div>
      <Hello
        title={"React props"}
        subtitle={"True begining of react - only props"}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
