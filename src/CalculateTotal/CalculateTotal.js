import React, { Component } from 'react';



class CalculateTotal extends Component {
    render() {
        const summary = Object.keys(this.state.selected).map((feature, idx) => {
            
            const selectedOption = this.state.selected[feature];
        const total = Object.keys(this.state.selected).reduce(
            (acc, curr) => acc + this.state.selected[curr].cost,
            0
          );
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
      
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
        </section>
      )
    })
 )
    
}
}

export default CalculateTotal;