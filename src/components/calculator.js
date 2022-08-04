import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  clickHandler = (e) => {
    const result = calculate(this.state, e.target.innerText);
    this.setState(result);
  }

  resultDisplay = (e) => {
    this.setState({
      total: e.target.innerText,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <div className="calculator-display" onChange={this.resultDisplay}>
          {total}
          {operation}
          {next}
        </div>
        <div className="buttons">
          <button type="button" className="button" onClick={this.clickHandler}>AC</button>
          <button type="button" className="button" onClick={this.clickHandler}>+/-</button>
          <button type="button" className="button" onClick={this.clickHandler}>%</button>
          <button type="button" className="operator" onClick={this.clickHandler}>÷</button>
          <button type="button" className="button" onClick={this.clickHandler}>7</button>
          <button type="button" className="button" onClick={this.clickHandler}>8</button>
          <button type="button" className="button" onClick={this.clickHandler}>9</button>
          <button type="button" className="operator" onClick={this.clickHandler}>x</button>
          <button type="button" className="button" onClick={this.clickHandler}>4</button>
          <button type="button" className="button" onClick={this.clickHandler}>5</button>
          <button type="button" className="button" onClick={this.clickHandler}>6</button>
          <button type="button" className="operator" onClick={this.clickHandler}>-</button>
          <button type="button" className="button" onClick={this.clickHandler}>3</button>
          <button type="button" className="button" onClick={this.clickHandler}>2</button>
          <button type="button" className="button" onClick={this.clickHandler}>1</button>
          <button type="button" className="operator" onClick={this.clickHandler}>+</button>
          <button type="button" className="button zero" onClick={this.clickHandler}>0</button>
          <button type="button" className="button" onClick={this.clickHandler}>.</button>
          <button type="button" className="operator" onClick={this.clickHandler}>=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
