import { useState } from "react";
import { SiCoffeescript } from "react-icons/si";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/user/userSlice";

const Header = () => {
  const [productDropdown, setProductDropdown] = useState(false);

  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const toggleProductDropdown = () => {
    setProductDropdown(!productDropdown);
  };

  const closeProductDropdown = () => {
    setProductDropdown(false);
  };

  const onClickLogout = () => {
    const remove = localStorage.removeItem("Auth");
    dispatch(Logout());
    Navigate("/login");
  };

  return (
    <div className="fixed w-full z-10 bg-gradient-to-r from-[#9bc7f4] to-[#3183da]">
      <div className="">
        <div className=" flex flex-row justify-between p-4 lg:px-32 px-5  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <Link
            to="/"
            className=" flex flex-row items-center cursor-pointer gap-2"
          >
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className=" text-xl font-semibold">E-commerce</h1>
          </Link>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="/"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="/about"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="/contact"
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Contact
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <div
              className="group relative inline-block cursor-pointer hover:text-brightColor "
              onMouseEnter={toggleProductDropdown}
              onMouseLeave={closeProductDropdown}
            >
              <span>{currentUser ? currentUser.user.name : "Register"} </span>
              <div
                className={`${
                  productDropdown ? "opacity-100" : "opacity-0"
                }  absolute mt-2 -ml-10 w-30 bg-white border border-gray-300 rounded-md shadow-lg  transition-opacity duration-300`}
              >
                {currentUser == null ? (
                  <Link
                    to="/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    LogIn
                  </Link>
                ) : (
                  <Link
                    to=""
                    onClick={onClickLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    LogOut
                  </Link>
                )}

                {currentUser ? (
                  currentUser.user.role == true ? (
                    <Link
                      to="/admin-dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeProductDropdown}
                    >
                      Admin Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                      onClick={closeProductDropdown}
                    >
                      Dashboard
                    </Link>
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-blue-500  text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="/"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            About Us
          </Link>
          <Link
            to="/product"
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Products
          </Link>
          <Link
            to="/review"
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Reviews
          </Link>

          <Link
            to="/register"
            onClick={closeMenu}
            className="px-6 py-1 border-2 border-white bg-[#FFDCAB] hover:text-[#AB6B2E] transition-all rounded-full hover:bg-white"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
