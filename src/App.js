import React, { Component } from 'react';
import logo from './logo90.png';
import './App.scss';
import Header from './Header';
import Playing from './Playing';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header logo={logo} />
        <div className='app-body'>
          <Playing />
        </div>
      </div>
    );
  }
}
