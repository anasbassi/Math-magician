import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operator: null,
  });

  const clickHandler = (e) => {
    const result = calculate(state, e.target.textContent);
    setState(result);
  };

  const resultDisplay = (e) => {
    setState({
      total: e.target.textContent,
    });
  };

  const { total, next, operation } = state;
  return (
    <section>
      <h2>Let&apos;s Do Some Maths</h2>
      <div className="calculator">
        <div className="calculator-display" onChange={resultDisplay}>
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" className="button" onClick={clickHandler}>AC</button>
          <button type="button" className="button" onClick={clickHandler}>+/-</button>
          <button type="button" className="button" onClick={clickHandler}>%</button>
          <button type="button" className="operator" onClick={clickHandler}>÷</button>
          <button type="button" className="button" onClick={clickHandler}>7</button>
          <button type="button" className="button" onClick={clickHandler}>8</button>
          <button type="button" className="button" onClick={clickHandler}>9</button>
          <button type="button" className="operator" onClick={clickHandler}>x</button>
          <button type="button" className="button" onClick={clickHandler}>4</button>
          <button type="button" className="button" onClick={clickHandler}>5</button>
          <button type="button" className="button" onClick={clickHandler}>6</button>
          <button type="button" className="operator" onClick={clickHandler}>-</button>
          <button type="button" className="button" onClick={clickHandler}>3</button>
          <button type="button" className="button" onClick={clickHandler}>2</button>
          <button type="button" className="button" onClick={clickHandler}>1</button>
          <button type="button" className="operator" onClick={clickHandler}>+</button>
          <button type="button" className="button zero" onClick={clickHandler}>0</button>
          <button type="button" className="button" onClick={clickHandler}>.</button>
          <button type="button" className="operator" onClick={clickHandler}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
