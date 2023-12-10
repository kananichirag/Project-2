import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  signInFailer,
  signInSuccess,
  signInStart,
} from "../../redux/user/userSlice";
import axios from "axios";

function Login() {
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [ShowPass, setShowPass] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleShowPass = () => {
    setShowPass((pre) => !pre);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = FormData;
    try {
      if (email && password) {
        dispatch(signInStart());
        const res = await axios.post(
          `${import.meta.env.VITE_REACT_APP_API}/v1/auth/login`,
          { email, password }
        );

        if (res.data.success) {
          toast.success(res.data.msg);
          dispatch(signInSuccess(res.data));
          localStorage.setItem("Auth", JSON.stringify(res.data));
          navigate("/");
        } else {
          toast.error(res.data.msg);
          dispatch(signInFailer());
        }
      } else {
        toast.error("Invalid Values.!!!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className="">
        <h1 className="font-semibold mb-4 text-4xl">Log In</h1>
      </div>
      <div className="lg:w-2/6 border-[1px]  bg-blue-100 shadow-lg drop-shadow-lg rounded  lg:p-8 ">
        <form className="flex flex-col p-8" onSubmit={handleSubmit}>
          <label htmlFor="email" className="text-xl text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            className="p-2 rounded outline-slate-400 mb-2"
          />

          <label htmlFor="password" className="text-xl text-slate-700 mb-1">
            Password
          </label>
          <div className="flex bg-white focus-within:outline outline-slate-400 rounded px-2 py-2 ">
            <input
              type={ShowPass ? "text" : "password"}
              onChange={handleChange}
              name="password"
              className=" w-full outline-none bg-white border-none"
            />
            <span
              onClick={handleShowPass}
              className="flex items-center text-xl cursor-pointer"
            >
              {ShowPass ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="p-2 border-2 mt-5  bg-blue-300 hover:bg-blue-400 hover:text-white transition-all rounded-full">
            {loading ? "Loading.." : "Log In"}
          </button>
        </form>
        <p className="text-slate-700 flex ml-3 lg:ml-8 mb-2 text-[18px] ">
          Don't have account ?
          <Link to="/register">
            <span className="hover:text-green-600">Register</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
