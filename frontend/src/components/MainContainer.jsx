import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./Videobackground";

function MainContainer() {
    const movie = useSelector(store=>store.movie?.nowPlaying)
    if(!movie) return

    const {overview,id,title} = movie[4]
  return (
    <>
    <VideoTitle title={title} overview={overview}/>
    <VideoBackground movieId={id}/>
    </>
    
  );
}

export default MainContainer;
