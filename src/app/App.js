import React, { Component } from 'react';

import Nav from "./components/Nav";
import SearchArea from "./components/SearchArea";
import List from "./components/List";
import Pagination from "./components/Pagination";




class App extends Component {

 state = {
      movies: [],
      searchTerm: '',
      totalResults: 0,
      currentPage: 1

    }



  


  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], totalResults: data.total_results})
    })
  }

  

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})

  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=e0b76ea37ca9d64aaa29d485cd5395e6&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({ movies: [...data.results], currentPage: pageNumber})
    })
  }

  


 render(){
  const numberPages = Math.floor(this.state.totalResults / 20);

  return (
    <div className="App">
    <Nav />
    <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
    <List movies={this.state.movies}/>
    { this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage} /> : ''}

    </div>
  );
 }
}

export default App;