import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'

function CreateProduct() {
  return (
    <div className="min-h-screen flex flex-row w-[500px]">
    <div className="flex flex-row mt-20 ml-2">
      <div className="  border-[1px] border-black lg:h-[200px] lg:w-[250px] md:h-[200px] md:w-[250px]  w-[180px] h-[170px] rounded-lg">
        <AdminMenu />
      </div>
      <div className=" border-[1px] border-black  rounded-lg lg:ml-40 ml-5 lg:w-[500px]  lg:h-[180px] md:ml-20 md:w-[400px] md:h-[180px] h-[170px] w-[280px]">
        <div className="w-full">
          <h1 className=" text-xl lg:text-4xl text-center">Create Product</h1>
          
        </div>
        <div className="text-lg m-4 ">
          {/* <h2 className="mb-2">Admin Name: {currentUser.user.name}</h2>
          <h2 className="mb-2">Admin Email: {currentUser.user.email}</h2>
          <h2 className="mb-2">Admin Phone: {currentUser.user.phone}</h2> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default CreateProduct