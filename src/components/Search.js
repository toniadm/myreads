import React, {Component} from 'react';
import Book from './Book';

import * as BooksAPI from '../BooksAPI';

class Search extends Component {
  state = {
    query: '',
    booksSearched: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updatebooksSearched(query);
  }

  updatebooksSearched = (query) => {
    if (query) {
          BooksAPI.search(query).then((booksSearched) => {
            if (booksSearched.error) {
              this.setState({booksSearched: []});
            } else {
              this.setState({booksSearched: booksSearched });
            }
          })
      } else {
      this.setState({booksSearched: [] });
    }
  }

  render() {

    return (
      <div className="search-books">
      <div className="search-books-bar">

        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>

        <div className="search-books-input-wrapper">
          <input
            type="text" placeholder="Search by title or author"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>

      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {
            this.state.booksSearched.map(bookSearched => (
              <li key={bookSearched.id}>
                <Book
                  book={bookSearched}
                />
              </li>
            ))
          }
        </ol>
      </div>

    </div>
    );
  }
}

export default Search;