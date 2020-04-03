import React from 'react';
import logo from './logo.svg';
import './App.css';
import PageCard from './components/PageCard'

class App extends React.Component {
  render() {
    return <div className="App">

      <div className="content">
        <PageCard/>
      </div>
    </div>
  }
}

export default App;
