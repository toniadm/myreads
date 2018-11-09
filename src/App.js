import React from 'react';
import SearchPage from './SearchPage';
import MainPage from './MainPage';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks: myBooks })
    })
  }
  render() {
    return (
      <div className="app">
        <MainPage 
          myBooks={this.state.myBooks}
        />
      </div>
    )
  }
}

export default BooksApp
