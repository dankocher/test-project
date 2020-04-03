import React from 'react';
import './App.scss';
import Header from "./components/Header";
import Home from "./components/Home";
import PageContainer from "./components/PageContainer";

const PAGE_STORAGE_NAME = "test-project-page";

class App extends React.Component {

  constructor(props) {
    super(props);

    const currentPage = localStorage.getItem(PAGE_STORAGE_NAME);

    this.state = {
      currentPage: currentPage || "home",
      // pages: ["Page 1", "Page 2", "Page 3", "Page 4"],
      pages: ["Page 1", "Page 2", "Page 3", "Page 4", "Page 5", "Page 6", "Page 7", "Page 8", "Page 9"]
    };
  }

  setPage = (currentPage) => {
    this.setState({currentPage});
    localStorage.setItem(PAGE_STORAGE_NAME, currentPage);
  };

  render() {
    const {pages, currentPage} = this.state;
    return <div className="App">
      <div className="app-header">
        <Header selectedPage={currentPage} onClick={() => this.setPage('home')}/>
      </div>

      <div className="app-content">
        {
          currentPage === "home" ?
              <Home selectPage={page => this.setPage(page)} pages={pages}/>
              :
              <PageContainer pages={pages} currentPage={currentPage} selectPage={page => this.setPage(page)}/>
        }
      </div>
    </div>
  }
}

export default App;
