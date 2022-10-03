const App = () => {
  const [expression, setExpression] = React.useState("");
  const [answer, setAnswer] = React.useState(0);
  const display = (symbol) => {
    setExpression((prev) => prev + symbol);
    if (expression[expression.length - 1] == "=") {
      if (/[1-9.]/.test(symbol)) {
        setExpression(symbol);
      } else {
        setExpression(answer + symbol);
      }
    }
  };

  const calculate = () => {
    setAnswer(eval(expression));
    setExpression((prev) => prev + "=");
  };
  const allClear = () => {
    setExpression("");
    setAnswer(0);
  };

  return (
    <div className="container-xl primary">
      <div className="row">
        <button
          onClick={calculate}
          className="btn btn-success col-8"
          id="equals"
        >
          =
        </button>

        <button onClick={allClear} className="btn btn-danger col-4" id="clear">
          AC
        </button>
      </div>

      <div className="row">
        <button
          onClick={() => display("0")}
          className="btn btn-primary col-6"
          id="zero"
        >
          0
        </button>
        <button
          onClick={() => display(".")}
          className="btn btn-dark col-3"
          id="decimal"
        >
          .
        </button>

        <button
          onClick={() => display("*")}
          className="btn btn-dark col-3"
          id="multiply"
        >
          x
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => display("1")}
          className="btn btn-primary col"
          id="one"
        >
          1
        </button>
        <button
          onClick={() => display("2")}
          className="btn btn-primary col"
          id="two"
        >
          2
        </button>
        <button
          onClick={() => display("3")}
          className="btn btn-primary col"
          id="three"
        >
          3
        </button>
        <button
          onClick={() => display("/")}
          className="btn btn-dark col"
          id="divide"
        >
          /
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => display("4")}
          className="btn btn-primary col"
          id="four"
        >
          4
        </button>
        <button
          onClick={() => display("5")}
          className="btn btn-primary col"
          id="five"
        >
          5
        </button>
        <button
          onClick={() => display("6")}
          className="btn btn-primary col"
          id="six"
        >
          6
        </button>
        <button
          onClick={() => display("-")}
          className="btn btn-dark col"
          id="subtract"
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          onClick={() => display("7")}
          className="btn btn-primary col"
          id="seven"
        >
          7
        </button>
        <button
          onClick={() => display("8")}
          className="btn btn-primary col"
          id="eight"
        >
          8
        </button>
        <button
          onClick={() => display("9")}
          className="btn btn-primary col"
          id="nine"
        >
          9
        </button>
        <button
          onClick={() => display("+")}
          className="btn btn-dark col"
          id="add"
        >
          +
        </button>
      </div>
      <div id="display">
        <input type="text" value={expression} disabled></input>
      </div>
      <div id="answer">{answer}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
