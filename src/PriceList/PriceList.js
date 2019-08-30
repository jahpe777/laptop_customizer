import React, { Component } from 'react';
import '../App.css';

class PriceList extends Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + '-' + idx;c
      const options = this.props.features[feature].map(item => {
      const itemHash = slugify(JSON.stringify(item));
        
    return (
    <div>
      <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
          </form>
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        {options}
      </fieldset>
    </div> 
      );
  });

export default PriceList;