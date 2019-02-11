import React, { Component } from 'react';
import axios from 'axios';
import SliderContainer from './SliderContainer';
import {api_constants} from '../constants';

class Home extends Component {
  constructor(){
    super();
    this.state = {
        trending_movies:[],
        trending_tv:[]
      };
  }
    
  componentDidMount() {
    this.getTrandingMovies();
    this.getTrandingTV(); 
  }

  getTrandingMovies = () => {
    axios.get(`${api_constants.api_base_url}${api_constants.api_trending_movies}?api_key=${api_constants.api_key}`)
      .then(res => {
        console.log(res.data);
        this.setState({trending_movies: res.data.results})
      })
  }

  getTrandingTV = () => {
    axios.get(`${api_constants.api_base_url}${api_constants.api_trending_tv}?api_key=${api_constants.api_key}`)
      .then(res => {
        console.log(res.data);
        this.setState({trending_tv: res.data.results})
      })
  }

  render(){
    return (
      <div>
        <h1>THE BEST TEST MOVIE APP EVER ;)</h1>
        <SliderContainer title='Popular movies' slides={this.state.trending_movies} />
        <SliderContainer title='Popular series' slides={this.state.trending_tv} />
      </div>
    )
  }
}
export default Home;