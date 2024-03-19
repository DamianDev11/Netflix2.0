import { useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import useMovieById from "../hooks/useMovieById";

const VideoBackground=({movieId,bool})=> {
    const trailMovie =useSelector(store=>store.movie.trailerMovie)
    
    const TM = trailMovie.key || `DXb7tWC2W5o`

      
    useMovieById(movieId)
  return (
    <div className="w-[vw] overflow-hidden">
      <iframe
        className={`${ bool ? "w-[100%]" : "w-screen aspect-video"}`}
        src={`https://www.youtube.com/embed/${TM}?si=pIBykgPn9uOVQFwr&autoplay=1&mute=1&loop=1`}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
