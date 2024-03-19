import axios from "axios"
import { getNowPlayingMoview } from "../redux/movieSlice"
import { Now_Playing,options } from "../utils/constants"
import {  useDispatch } from "react-redux"


const useNowPlaying =async () =>{
    const dispatch = useDispatch()
    try{

        const res = await axios.get(Now_Playing,options)
        dispatch(getNowPlayingMoview(res?.data?.results))
        
    }catch(error){
        console.log(error)
    }
  }

  export default useNowPlaying;