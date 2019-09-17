import React, { Component } from 'react';
import Features from '../Features/Features';
import CalculateTotal from '../CalculateTotal/CalculateTotal';
import DisplayTotal from '../DisplayTotal/DisplayTotal';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
class SummaryList extends Component {
    render() {
      
      
      const items = Object.keys(this.props.selected).map((feature, idx) => {
      const featureHash = feature + '-' + idx;
      const selectedOption = this.state.selected[feature];
        
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
            return (
              <div>
              {items}
              <br />
              <DisplayTotal />
              </div>
            )
            }
          }
        
        export default SummaryList;
    
  