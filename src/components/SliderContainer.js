import React from 'react';
import Slider from 'react-slick';
import { api_constants } from '../constants';
import { Link } from 'react-router-dom';   

const SliderContainer = (props) => {
    return (
      <React.Fragment>    
          <h2>{props.title}</h2>
          <Slider
              dots={true}
              infinite={true}
              speed={500}
              slidesToShow={6}
              slidesToScroll={6}>
              {
                  props.slides.map((m, i) => (<Link key={i} to={{ pathname: `/movie/${m.id}`, state: { movie: m } }}>
                       <p>{m.name || m.title}</p>
                       <img alt='movie-img' src={`${api_constants.api_image_base_url}${m.poster_path}`} />
                    </Link>)
                  )
              }
          </Slider>
      </React.Fragment>
    )
}
export default SliderContainer;