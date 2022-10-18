import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="container">
          <div className="column">
            <div className="movie-detail">
              <h1 className="title">
                {movie.Title} <span>{movie.Rated}</span>
              </h1>
              <h5 className="">{movie.Year}</h5>
              <div className="description">{movie.Plot}</div>
              <div className="container2">
                <div className="img">
                  <img src={movie.Poster} alt="Poster" />
                </div>
                <ul>
                  <li>Director: {movie.Director}</li>
                  <li>BoxOffice:{movie.BoxOffice}</li>
                  <li>imdb Rating: {movie.imdbRating}</li>
                  <li>Genre: {movie.Genre}</li>
                  <li>Awards: {movie.Awards}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    this.props.getMovieDetail(id);
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (id) => dispatch(getMovieDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
