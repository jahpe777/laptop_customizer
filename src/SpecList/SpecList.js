import React, { Component } from 'react';
import SpecListItem from '../SpecListItem/SpecListItem'

class SpecList extends Component {
  render() {
    return(
      <div>
        <section className='main__summary'>
          <h3>NEW GREENLEAF 2018</h3>
          <SpecListItem currentSelections={this.props.currentSelections}/>
          <div className='summary__total'>
          <div className='summary__total__label'>Your Price: </div>
            <div className='summary__total__value'>
              {new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'})
                .format(Object.keys(this.props.currentSelections)
                .reduce((acc, curr) => acc + this.props.currentSelections[curr].cost, 0))}
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default SpecList;

