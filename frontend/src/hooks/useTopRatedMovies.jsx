import axios from "axios"
import {  getTopRatedMovies } from "../redux/movieSlice"
import { TopRated_Movies, options } from "../utils/constants"
import {  useDispatch } from "react-redux"


const useTopRatedMovies =async () =>{
    const dispatch = useDispatch()
    try{

        const res = await axios.get(TopRated_Movies,options)
        dispatch(getTopRatedMovies(res.data.results))
        
    }catch(error){
        console.log(error)
    }
  }

  export default useTopRatedMovies;