import React, { Component } from 'react';

class PriceListItem extends Component {
  render() {
    let {
      featureClass,
      item,
      keyName
    } = this.props
        return (
          <li className='feature_item'>
            <div className={featureClass}

              onClick={e => this.props.handleUpdate(keyName, item)}>
                {item.name}
                ({new Intl.NumberFormat('en-US', {style:'currency', currency: 'USD'})
                  .format(item.cost)  })
              </div>
          </li>
        )
      }
    }
    
export default PriceListItem;