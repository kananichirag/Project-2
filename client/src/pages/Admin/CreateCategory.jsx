import React, { useEffect, useState } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import { toast } from "react-hot-toast";
import axios from "axios";

function CreateCategory() {
  const [Category, setCategory] = useState([]);

  const GetAllCategory = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_REACT_APP_API}/v1/category/getall`
      );

      if (data.success) {
        setCategory(data.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something Wrong in Getall Category.!!!");
    }
  };

  useEffect(() => {
    GetAllCategory();
  }, []);

  return (
    <div className="min-h-screen flex flex-row w-[500px]">
      <div className="flex flex-col md:flex-row lg:flex-row mt-20 ml-2">
        <div className="mb-4 lg:ml-1 md:ml-1 ml-28 mt-2 border-[1px] border-black lg:h-[200px] lg:w-[250px] md:h-[200px] md:w-[250px]  w-[250px] h-[170px] rounded-lg">
          <AdminMenu />
        </div>
        <div className=" border-[1px] border-black mt-2 rounded-lg lg:ml-20 ml-5 lg:w-[700px]  lg:h-[550px] md:ml-15 md:w-[450px] md:h-[450px] h-[400px] w-[400px]">
          <div className="w-full">
            <h1 className=" text-xl lg:text-4xl text-center">
              Create Category
            </h1>
          </div>
          <div className="text-lg m-4 ">
            <div className="">
              <table className="min-w-full text-center text-sm font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* {Category.map((c) => (
                    <>
                      <tr className="border-b dark:border-neutral-500">
                        <td className="whitespace-nowrap px-5 py-4 font-medium">
                          {c.name}
                        </td>
                        <td>
                          <button className="bg-green-300 rounded h-10 w-20 font-semibold">
                            Edit
                          </button>
                        </td>
                        <td>
                          <button className="bg-red-300 rounded h-10 w-20 font-semibold">
                            Delete
                          </button>
                        </td>
                      </tr>
                    </>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCategory;
