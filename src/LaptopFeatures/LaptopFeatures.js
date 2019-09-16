import React, { Component } from 'react';
import slugify from 'slugify';
import CalculateTotal from './CalculateTotal/CalculateTotal';
import Features  from './Features/Features';

class LaptopFeatures extends Component {

render() {
  const features = Object.keys(this.props.features).map((feature, idx) => {
  const featureHash = feature + '-' + idx;
    
    
    return (
      
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{Features}</h3>
          </legend>
          {options}
        </fieldset>
        
      );
    
    
    }
    }
  }

    
    




    
    export default LaptopFeatures;