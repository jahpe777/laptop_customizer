import React, { Component } from 'react';
import '../App.css';

class Summary extends Component {
  render() {
    return (
      <div className="summary__option" key={featureHash}>
        <div className="summary__option__label">{feature} </div>
        <div className="summary__option__value">{selectedOption.name}</div>
        <div className="summary__option__cost">
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
    });

const total = Object.keys(this.state.selected).reduce(
(acc, curr) => acc + this.state.selected[curr].cost,
0
);

export default Summary;