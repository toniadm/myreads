import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

// import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        <SearchPage />
      </div>
    )
  }
}

export default BooksApp
