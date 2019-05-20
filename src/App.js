import React from 'react';
import Signs from './Components/Signs';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div classname="title">
         <h1>Astro Cards</h1>
        </div>
        <Signs />
      </div>
    )
  }
}

export default App;
