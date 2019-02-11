import React, { Component } from 'react';
import axios from 'axios';
import SliderContainer from './SliderContainer';
import {api_constants} from '../constants';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      query: '',
      results: []    
    };
  }
    
  getInfo = () => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_constants.api_key}&query=${this.state.query}`)
      .then(({ data }) => {
        this.setState({
          results: data.results                            
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo();
      } 
    })
  }

  render() {
    return (
      <React.Fragment>        
          <form>
            <input
              placeholder="Search for..."
              ref={input => this.search = input}
              onChange={this.handleInputChange}
            />
          </form>
          <div className='suggestions'>
          <SliderContainer title='Search results...' slides={this.state.results} />
          </div>    
      </React.Fragment>    
    )
  }
}
export default Search;