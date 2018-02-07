import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header.js';
import MapContainer from './MapContainer.js';

import { fetchCoinmap } from '../actions/coinMapActions.js';

@connect((store) => {
  return {
    coinmap: store.coinmap.coinmap
  }
})

export default class App extends Component {
  componentWillMount(){
    this.props.dispatch(fetchCoinmap());
  }

  render() {
      console.log(this.props.coinmap)
    return (
      <div className="app-container">
        <Header />
        <MapContainer venues={this.props.coinmap}/>
      </div>
    );
  }
}
