import React, { Component } from 'react';
// import { Route, BrowserRouter } from 'react-router-dom';

import 'assets/common_styles/style.scss';
import 'bootstrap';
import TeamForm from './src/components/form';
import Banner from './src/components/banner';

class App extends Component {
    render() {
        return (
          <div>
            <Banner />
            <TeamForm />
          </div>
        );
      }
}

export default App;