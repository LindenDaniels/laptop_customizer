import React, { Component } from 'react';
import Header from './Header/Header';
import FeaturesList from './FeaturesList/FeaturesList';
import DisplayTotal from './DisplayTotal/DisplayTotal';
import './App.css';
import Summary from './Summary/Summary';



class App extends Component {
  
  state = {
    selected: {
      Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
      'Operating System': {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
      'Video Card': {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
      Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
    }
  };
  
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    })
  }

  render() {
    
    return (
      <div className="App">
        <Header />
        <form className="main__form">
            <h2>Customize your laptop</h2>
        <FeaturesList
        features = {this.props.features}
        selected = {this.state.selected}
        updateFeature={(feature, newItem) => this.updateFeature(feature, newItem)} />
        </form>
        
        <Summary
        selected = {this.state.selected} />
       
        <DisplayTotal
        selected = {this.state.selected} />
      
      </div>
    );
  }
  }

export default App;
