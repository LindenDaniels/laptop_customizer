import React, { Component } from 'react';
import CalculateTotal from '../CalculateTotal/CalculateTotal';

class DisplayTotal extends Component {
    render() {
        
    return (
        <section className="main__summary">
            <CalculateTotal
                selected={this.props.selected}
            />
        </section>

    );
}
    
}

export default DisplayTotal;