import React from 'react';
import { Route } from 'react-router-dom';
import Search from './components/Search';
import Main from './components/Main';

import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    bksData: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((bksData) => {
      this.setState({bksData}) /*reviewer suggestion*/
    })
  }
/*
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((bksData) => {
      this.setState({bksData})
    })
  }*/

    changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState(state => ({
        bksData: state.bksData.filter(bk => bk.id !== book.id).concat([book])
      }))
    })
  }

  render() {
    return (
      <div className="app">

       <Route exact path="/" render={() => (
         <Main bksData={this.state.bksData} changeShelf={this.changeShelf}/>
        )} />

        <Route path="/search" render={() => (
         <Search changeShelf={this.changeShelf} bksData={this.state.bksData}/>
        )} />
      </div>
    )
  }
}

export default BooksApp;
