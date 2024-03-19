import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import netflixbg from "../assets/netflix-bg.jpg";
import { useState } from "react";
import { API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";



function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const isLoading = useSelector(store=>store.app.isLoading)
  const loginHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const userDetails = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true))
    if (isLoggedIn) {
      //login
      try {
        const user = { email, password };
        const res = await axios.post(`${API}/login`, user,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });
        
        if(res.data.success){
            toast.success(res.data.message)
        }
        
        dispatch(setUser(res.data.user))
        navigate("/browse")
      } catch (error) {
          toast.error(error.response.data.message)
        console.log("login error" + error);
      }finally{
        dispatch(setLoading(false))
      }
    } else {
      //register
      try {
        dispatch(setLoading(true))
        const user = { fullName, email, password };
        const res = await axios.post(`${API}/register`, user,{
            headers:{
                "Content-Type":"application/json"
            },
            withCredentials:true
        });
        if(res.data.success){
            toast.success(res.data.message)
        }
        
        setIsLoggedIn(true)
      } catch (error) {
        toast.error(error.response.data.message)
        console.log("register error" + error);
      }finally{
        dispatch(setLoading(false))
      }
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src={netflixbg}
          alt="Netflix-background"
        />
      </div>
      <form
        onSubmit={userDetails}
        className="flex flex-col w-3/12 p-12 my-36 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-85"
      >
        <h1 className="text 3xl text-white mb-5 font-bold">
          {isLoggedIn ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col">
          {!isLoggedIn && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="outline-none p-3 my-2 rounded-sm bg-gray-800 text-white"
          />
          <button className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium">
            {`${isLoading ? "Loading..." :(isLoggedIn ? "Login" : "Signup")}`}
            
          </button>
          <p className="text-white mt-2s">
            {isLoggedIn ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={loginHandler}
              className="ml-1 text-blue-900 font-medium cursor-pointer"
            >
              {isLoggedIn ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </>
  );
}

export default Login;
