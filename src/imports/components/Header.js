import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <h1> CRYPTOMAP </h1>
        <div className="header-actions">
          <select name="currency">
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="BCH">Bitcoin Cash</option>
            <option value="XPR">Ripple</option>
          </select>
          <select name="type">
            <option value="ATM">ATM</option>
            <option value="Bookstore">Bookstore</option>
            <option value="Restraunt">Restraunt</option>
            <option value="Supermarket">Supermarket</option>
          </select>
          <input type="text" placeholder="Search" ref="search"/>
        </div>
      </div>
    );
  }
}
