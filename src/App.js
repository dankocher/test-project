import React from 'react';
import './App.scss';
import Header from "./components/Header";



class App extends React.Component {
  render() {
    return <div className="App">
        <div className="app-header">
            <Header/>
        </div>

        <div className="app-content">

        </div>
    </div>
  }
}

export default App;
