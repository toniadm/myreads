import React from 'react';
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

  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        {/*<Main
          books={this.state.books}
          moveShelf={this.moveShelf}
        />*/}
        <Search />
      </div>
    )
  }
}

export default BooksApp
