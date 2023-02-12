import React from 'react'
import StarRatingComponent from 'react-star-rating-component'
import './MovieCard.css'




const MovieCard = ({ movie }) => {
  return (
    <>

      <div className="card flex-row">
        <div className="bg-image hover-overlay ripple " data-mdb-ripple-color="light">
          <img className="poster" src={movie.posterURL} />
        </div>
        <div className="card-body">
          <h5 className="title">{movie.title}</h5>
          <p className="description">{movie.description}</p>
          <StarRatingComponent
            name="rate1"
            starCount={10}
            value={movie.rating} />
        </div>
      </div>
    </>
  )
}

export default MovieCard