import axios from "axios";
import netflix from "../assets/netflix.png";
import { IoIosArrowDropdown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { API } from "../utils/constants";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setToggle } from "../redux/movieSlice";

function Header() {
  const user = useSelector((store) => store.app.user);
  const toggle = useSelector(store=>store.movie.toggle)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const logoutHandler =async () => {
    try{
        const res =await axios.get(`${API}/logout`)
        if(res.data.success){
            toast.success(res.data.message)
        }
   
        dispatch(setUser(null))
        navigate("/")
    }catch(error){
        console.log(error)
    }
  }

  const toggleHandler = () =>{
    dispatch(setToggle())
  }
  
  return (
    <div className="absolute z-10 flex w-[100%] items-center justify-between bg-gradient-to-b from-black">
      <img className="w-56" src={netflix} alt="Neflix-logo" />

      {user && (
        <div className="flex items-center px-6 text-white">
          <IoIosArrowDropdown size="24px" />
          <h1 className="text-lg font-medium">{user?.fullName}</h1>
          <div className="ml-4">
            <button onClick={logoutHandler} className="bg-red-800 text-white px-4 py-2">Logout</button>
            <button onClick={toggleHandler} className="bg-red-800 text-white px-4 py-2 ml-2">
              {toggle ? "Home" : "Search Movie"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
