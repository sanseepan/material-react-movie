import React, { Component } from "react";
import Movie from "./Movie";

class Movies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/movies")
      .then(res => res.json())
      .then(data => this.setState({ movies: data }));
  }

  render() {
    const movies = this.state.movies;
    if (movies.length === 0) {
      return <h3>no more movies</h3>;
    } else {
      return movies.map((movie, id) => {
        return (
          <div className="movies-main">
            <Movie key={movie.id} movie={movie} />
          </div>
        );
      });
    }
  }
}

export default Movies;
