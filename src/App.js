import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import Search from './components/Search';
import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
            <Navbar/>
            <Route exact path='/' component={Home} />
            <Route exact path='/search' component={Search} />
            <Route path='/movie/:id' component={Movie} />
        </div>
      </BrowserRouter>    
    )
  }
}
export default App;