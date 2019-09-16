import React, { Component } from 'react';
import slugify from 'slugify';
import CalculateTotal from './CalculateTotal/CalculateTotal';

class LaptopFeatures extends Component {

render() {
    
    const USCurrencyFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      });
    const features = Object.keys(this.props.features).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const options = this.props.features[feature].map(item => {
    const itemHash = slugify(JSON.stringify(item));
      
        return (
          <div key={itemHash} className="feature__item">
              <form className="main__form">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === this.state.selected[feature].name}
              onChange={e => this.updateFeature(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          
       
      
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
        </form>
        </div>
      );
    )
    
    }

    );
    }
}
}


    
    export default LaptopFeatures;