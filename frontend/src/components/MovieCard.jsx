import { useDispatch } from "react-redux";
import { TMDB_IMG_URL } from "../utils/constants";
import { getId, setOpen } from "../redux/movieSlice";

const MovieCard = ({ posterPath, movieId }) => {
  const dispatch = useDispatch();
  if (posterPath === null) return null;

  const handleOpen = () => {
    dispatch(getId(movieId))
    dispatch(setOpen(true));
  };

  return (
    <div className="w-48 pr-2" onClick={handleOpen}>
      <img src={`${TMDB_IMG_URL}/${posterPath}`} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
