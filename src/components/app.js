import React, { Component } from 'react';

import Searchbar from '../containers/searchbar';
import  Weather_list  from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Searchbar />
        <Weather_list />
      </div>
    );
  }
}
