import {Link, useLocation } from "react-router-dom";

function AdminMenu() {
  const location = useLocation();
  return (
    <div className=" flex  flex-col lg:m-5  m-1 ">
      <div className="lg:mb-0 md:mb-2 p-2">
        <h1 className=" text-xl lg:text-4xl font-semibold ">AdminPanel</h1>
      </div>

      <div className="text-lg p-2 ">
        <Link
          to="/admin-createproduct"
          className={`list-group-item w-full  hover:bg-slate-400 bg-slate-200  lg:p-1 md:p-1  rounded text-center mb-1 ${
            location.pathname === "/admin-createproduct"
              ? "bg-yellow-300 text-white"
              : ""
          }`}
        >
          CreateProduct
        </Link>
        <Link
          to="/admin-createcategory"
          className={`list-group-item w-full  hover:bg-slate-400 bg-slate-200  lg:p-1 md:p-1  rounded text-center mb-1 ${
            location.pathname === "/admin-createcategory"
              ? "bg-yellow-300 text-white"
              : ""
          }`}
        >
          CreateCategory
        </Link>
        <Link
          to="/admin-users"
          className={`list-group-item w-full  hover:bg-slate-400 bg-slate-200  lg:p-1 md:p-1  rounded text-center mb-1 ${
            location.pathname === "/admin-users"
              ? "bg-yellow-300 text-white"
              : ""
          }`}
        >
          User
        </Link>
      </div>
    </div>
  );
}

export default AdminMenu;
