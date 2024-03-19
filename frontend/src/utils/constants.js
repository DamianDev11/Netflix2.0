export const API="http://localhost:8080/api/v1/user"

export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjUyOTNhZmVlMDRmMjViNmQyMDAwNzdjMjE5MjQxYSIsInN1YiI6IjY0OWIwYjFiMjk3NWNhMDE0NGNkMjkwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8cAEPlAz5VVfCLJ3LMySpeAQu-t5hLPaHdGsYinX1xQ'
    }
  };

export const Now_Playing = "https://api.themoviedb.org/3/movie/now_playing"
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular"
export const TopRated_Movies = " https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming"
export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500/"

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=funny&include_adult=false&language=en-US&page=1"