import React, { Component } from 'react';
import '../App.css';

class FeatureName extends Component {
  render() {
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
    });

const summary = Object.keys(this.state.selected).map((feature, idx) => {
const featureHash = feature + '-' + idx;
const selectedOption = this.state.selected[feature];

export default FeatureName;