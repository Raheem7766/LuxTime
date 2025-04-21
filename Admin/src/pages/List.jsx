/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import { backEndURL, currency } from "../App";
import { toast } from "react-toastify";
import { FaPen, FaEye } from "react-icons/fa"; // Import icons

const List = ({ token }) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(backEndURL + "/api/product/list");
      if (response.data.success) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backEndURL + "/api/product/remove",
        { id },
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        await fetchList();
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  const handleView = (id) => {
    // Handle view action
    console.log("View product with ID:", id);
  };

  const handleUpdate = (id) => {
    // Handle update action
    console.log("Update product with ID:", id);
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List Table Title */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <strong>Image</strong>
          <strong>Name</strong>
          <strong>Category</strong>
          <strong>Price</strong>
          <strong className="text-center">Actions</strong>
        </div>

        {/* Product List */}
        {list.map((item, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img src={item.image[0]} alt="" className="w-12" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>
              {currency}
              {item.price}
            </p>
            <div className="flex items-center justify-end md:justify-center gap-4">
              <button
                onClick={() => handleView(item._id)}
                className="text-blue-500 hover:text-blue-700"
              >
                <FaEye size={18} />
              </button>
              <button
                onClick={() => handleUpdate(item._id)}
                className="text-green-500 hover:text-green-700"
              >
                <FaPen size={18} />
              </button>
              <button
                onClick={() => removeProduct(item._id)}
                className="text-red-500 hover:text-red-700"
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;