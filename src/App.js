import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {
  render() {
    return <div className="App">
      <div className="app-header">
        <Header selectedPage={currentPage} onClick={() => this.setState({currentPage: 'home'})}/>
      </div>

        <div className="app-content">

        </div>
    </div>
  }
}

export default App;
