import React from "react";
import { NavLink } from "react-router-dom";

function AdminMenu() {
  return (
    <div className=" flex  flex-col lg:m-5  m-1 ">
      <div className="mb-3 p-2">
        <h1 className=" text-xl lg:text-4xl font-semibold ">AdminPanel</h1>
      </div>

      <div className="text-lg p-2">
        <NavLink to="/admin-createproduct" className="list-group-item w-full">CreateProduct</NavLink>
        <NavLink to='/admin-createcategory' className="list-group-item w-full">CreateCategory</NavLink>
        <NavLink to='/admin-users' className="list-group-item w-full">User</NavLink>
      </div>
    </div>
  );
}

export default AdminMenu;
