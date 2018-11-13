import React, {Component} from 'react';
import { Link } from 'react-router-dom';
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

        <Link to="/" className="close-search">Close</Link>

        <div className="search-books-input-wrapper">
          <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>
        </div>

      </div>

      <div className="search-books-results">
        <ol className="books-grid">
          {
            this.state.booksSearched.map(bookSearched => {
              let bshelf = "none";

              this.props.bksData.map(book => (
                  book.id === bookSearched.id ?
                  bshelf = book.shelf : ''
                ));

              return (
                <li key={bookSearched.id}>
                  <Book book={bookSearched} changeShelf={this.props.changeShelf} currentShelf={bshelf}/>
              </li>
              );
            })
          }
        </ol>
      </div>

    </div>
    );
  }
}

export default Search;