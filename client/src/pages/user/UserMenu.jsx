import React from "react";
import { NavLink } from "react-router-dom";

function UserMenu() {
  return (
    <div className=" flex  flex-col lg:m-5  m-1 ">
      <div className="mb-3 p-2">
        <h1 className=" text-xl lg:text-4xl font-semibold ">Dashboard</h1>
      </div>

      <div className="text-lg p-2">
        <NavLink to="/user-profile" className="list-group-item w-full">
          Profile
        </NavLink>
        <NavLink to="/user-orders" className="list-group-item w-full">
          Orders
        </NavLink> 
      </div>
    </div>
  );
}

export default UserMenu;
