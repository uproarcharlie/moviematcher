/* eslint react/no-did-mount-set-state: 0 */
import React, { PureComponent } from 'react';
import Movie from './movie';
import styled from 'styled-components';

class movieList extends PureComponent {
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const res = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=d18e5ceecb0a3b4dbe3a1e22861fc551&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await res.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <MovieGrid>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </MovieGrid>
    );
  }
}

export default movieList;

const MovieGrid = styled.div`
display: grid;
padding: 1rem;
grid-template-columns: repeat(6, 1fr);
`;
