import React, { Component } from 'react';
import Features from './Features/Features';

class SummaryList extends Component {
    render() {
        const USCurrencyFormat = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
          });
          const features = Object.keys(this.props.features).map((feature, idx) => {
          const featureHash = feature + '-' + idx;
          
            return (
    
    <div className="summary__option" key={featureHash}>
              <div className="summary__option__label">{feature} </div>
              <div className="summary__option__value">{selectedOption.name}</div>
              <div className="summary__option__cost">
                {USCurrencyFormat.format(selectedOption.cost)}
              </div>
            </div>
          
            )}
            }
        }
    
  