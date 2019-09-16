import React, { Component } from 'react';
import Features from './Features';

class FeaturesList extends Component {
    render() {
        return(
    <main>
          <form className="main__form">
          <h2>Customize your laptop</h2>
        {Features}
        
          </form>
     </main>
        )
        }
}

export default FeaturesList;