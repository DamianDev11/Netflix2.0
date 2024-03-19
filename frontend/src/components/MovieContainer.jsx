import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function MovieContainer() {
    const movie = useSelector(store=>store.movie)
   
  return (
    <div className="bg-black">
      <div className="-mt-52 relative-z-10">
        <MovieList title = {"Now Playing Movies"} movies={movie.nowPlaying}/>
        <MovieList title = {"popular movies"} movies={movie.popularMovies}/>
        <MovieList title = {"Top Rated movies"} movies={movie.topRatedMovies}/>
        <MovieList title = {"Upcoming movies"} movies={movie.upcomingMovies}/>
      </div>
    </div>
  );
}

export default MovieContainer;
