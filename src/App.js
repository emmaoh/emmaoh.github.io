import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Photos from './components/Photos';
import Capstone from './components/Capstone';
import ScrollableAnchor from 'react-scrollable-anchor';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="fade-in">
          <Profile />
          <ScrollableAnchor id={'about'}><About /></ScrollableAnchor>
          <ScrollableAnchor id={'photos'}><Photos /></ScrollableAnchor>ß
          <ScrollableAnchor id={'capstone'}><Capstone /></ScrollableAnchor>
          
          <Footer />
        </div>
      </div>
      );
  }
}

export default App;
