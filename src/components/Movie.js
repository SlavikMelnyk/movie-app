import React from 'react';
import { api_constants } from '../constants';

const Movie = (props) => {
    const movie = props.location.state.movie;
    return (
      <React.Fragment>
        <div className='movie-info'>
            <h1>{movie.title || movie.name}</h1>
            <p>{movie.overview}</p>
            <p>Date released: {movie.release_date}</p>
            <p>Rate: {movie.vote_average}</p>
        </div>
        <img className='movie-image' alt='movie-img' src={`${api_constants.api_image_big_base_url}${movie.poster_path}`} />
      </React.Fragment>
    )
}
export default Movie;