import React from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import Main from './components/Main';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">

       <Route exact path="/" render={() => (
         <Main books={this.state.books} changeShelf={this.changeShelf}/>
        )} />

        <Route path="/search" render={() => (
         <Search changeShelf={this.changeShelf} books={this.state.books}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;
