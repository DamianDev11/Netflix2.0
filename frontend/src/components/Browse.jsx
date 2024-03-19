import { useSelector } from "react-redux";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import MainContainer from "./MainContainer";
import MovieContainer from "./MovieContainer";
import useNowPlaying from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import SearchMovie from "./SearchMovie";

function Browse() {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();
  const toggle = useSelector((store) => store.movie.toggle);

  useNowPlaying();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div>
      <Header />
      <div>
        {toggle ? (
          <SearchMovie />
        ) : (
          <>
            <MainContainer />
            <MovieContainer />
          </>
        )}
      </div>
    </div>
  );
}

export default Browse;
