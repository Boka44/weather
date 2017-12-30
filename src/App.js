import React, { Component } from 'react';
import './App.css';
import { WeatherView } from './components/weatherView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>The Weather Report</h1>
          <h3>with Boka</h3>
        </header>
        <p><em>*Location received from Google Maps API and weather from Dark Sky.</em></p>
        <p><em>Certain locations from Google Maps may be more specific or not available.</em></p>
        <WeatherView />
      </div>
    );
  }
}

export default App;
