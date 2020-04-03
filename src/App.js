import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";

class App extends React.Component {

  state = {
    currentPage: "home",
    pages: ["Page 1", "Page 2", "Page 3", "Page 4"]
  };

  render() {
    const {pages, currentPage} = this.state;
    return <div className="App">
      <div className="app-header">
        <Header selectedPage={currentPage} onClick={() => this.setState({currentPage: 'home'})}/>
      </div>

      <div className="app-content">
        {
          currentPage === "home" ?
              <Home selectPage={page => this.setState({currentPage: page})}/>
              :
              <div>{currentPage}</div>
        }
      </div>
    </div>
  }
}

export default App;
