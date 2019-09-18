import React, { Component } from 'react';
import SummaryList from '../SummaryList/SummaryList';

class Summary extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                <SummaryList
        
        selected = {this.props.selected}
        />
           
            </section>
         ) }
}

export default Summary;