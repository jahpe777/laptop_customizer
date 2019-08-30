import React, { Component } from 'react';
import '../App.css';

class SpecList extends Component {
  render() {
    const summary = Object.keys(this.state.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];

    const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
      );
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
    });

export default SpecList;

