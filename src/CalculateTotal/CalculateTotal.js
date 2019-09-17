import React, { Component } from 'react';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const updateFeature = (feature, newValue) => {
  const selected = Object.assign({}, this.state.selected);
  selected[feature] = newValue;
  this.setState({
    selected
  });
}
class CalculateTotal extends Component {
    render() {
      const total = Object.keys(this.state.selected).reduce(
        (acc, curr) => acc + this.state.selected[curr].cost,
        0
      );
      return (
        <div className="summary__total">
              <div className="summary__total__label">Total</div>
              <div className="summary__total__value">
                {USCurrencyFormat.format(total)}
              </div>
        </div>
      )
    }
  }
    


export default CalculateTotal;