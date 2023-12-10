import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { toast } from "react-hot-toast";
import axios from "axios";

function Register() {
  const navigate = useNavigate()
  const [ShowPass, setShowPass] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const handleShowPassword = () => {
    setShowPass((pre) => !pre);
  };

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...FormData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, phone } = FormData;
    if (name && email && password && phone) {
      try {
        const res = await axios.post(`${import.meta.env.VITE_REACT_APP_API}/v1/auth/register`, {name,email,password,phone});
        if(res.data.success){
          toast.success(res.data.msg)
          navigate('/login')
        } else {
          toast.error(res.data.msg)
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.error("Invalid Values.!!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#9bc7f4] to-[#386abc] pb-20  ">
      <div className="mt-24 ">
        <h1 className="font-semibold mb-4 text-4xl">Register</h1>
      </div>
      <div className="lg:w-2/6 border-[1px]  bg-blue-100  shadow-lg drop-shadow-lg rounded  lg:p-8">
        <form className="flex w-full flex-col p-8" onSubmit={handleSubmit}>
          <label htmlFor="name" className="text-xl text-slate-700 mb-1">
            Name
          </label>

          <input
            type="text"
            name="name"
            id="name"
            onChange={handleOnChange}
            className="p-2 rounded outline-slate-400 mb-2"
          />

          <label htmlFor="phone" className="text-xl text-slate-700 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={handleOnChange}
            className="p-2 rounded outline-slate-400 mb-2"
          />

          <label htmlFor="email" className="text-xl text-slate-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleOnChange}
            className="p-2 rounded outline-slate-400 mb-2"
          />

          <label htmlFor="password" className="text-xl text-slate-700 mb-1">
            Password
          </label>
          <div className="flex  bg-white py-2 px-2 mt-1 rounded focus-within:outline outline-slate-400 ">
            <input
              type={ShowPass ? "text" : "password"}
              name="password"
              id="password"
              onChange={handleOnChange}
              className="w-full bg-white border-none outline-none"
            />
            <span
              onClick={handleShowPassword}
              className="flex text-xl cursor-pointer"
            >
              {ShowPass ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="p-2 border-2 mt-4  bg-blue-300 hover:text-white  hover:bg-blue-400 transition-all rounded-full">
            SignUp
          </button>
        </form>
        <p className="text-slate-700 flex text-[18px] ml-3 lg:ml-8 lg:mb-0 mb-2">
          Already have account ?
          <Link to="/login">
            <span className="hover:text-green-500">Log In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
