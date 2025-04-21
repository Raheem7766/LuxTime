import { useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { backEndURL } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Luxury");
  const [colors, setColors] = useState([]);
  const [bestseller, setBestseller] = useState(false);

  const [loader, setLoader] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoader(true);
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("colors", JSON.stringify(colors));
      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backEndURL + "/api/product/add",
        formData,
        { headers: { token } }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        setName("");
        setDescription("");
        setBestseller("");
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setCategory("Men");
        setSubCategory("Luxury");
        setPrice("");
        setColors([]);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <form
      className="flex flex-col w-full items-start gap-3"
      onSubmit={onSubmitHandler}
    >
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              src={!image1 ? assets.upload_area : URL.createObjectURL(image1)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              src={!image2 ? assets.upload_area : URL.createObjectURL(image2)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              src={!image3 ? assets.upload_area : URL.createObjectURL(image3)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              src={!image4 ? assets.upload_area : URL.createObjectURL(image4)}
              className="w-20"
              alt=""
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          type="text"
          placeholder="Type Here"
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          type="tex"
          placeholder="Write Content Here..."
          required
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="w-full max-w-[500px] px-3 py-2"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">{"Product Category"}</p>
          <select
            className="w-full px-3 py-2"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>
        <div>
          <p className="mb-2">{"Sub Category"}</p>
          <select
            className="w-full px-3 py-2"
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Luxury">Luxury</option>
            <option value="Vintage">Vintage</option>
            <option value="Sport">Sport</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="25"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Colors</p>
        <div className="flex gap-3">
          <div
            onClick={() =>
              setColors((prev) =>
                prev.includes("Black")
                  ? prev.filter((item) => item !== "Black")
                  : [...prev, "Black"]
              )
            }
          >
            <p
              className={`${
                colors.includes("Black") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              BLACK
            </p>
          </div>
          <div
            onClick={() =>
              setColors((prev) =>
                prev.includes("White")
                  ? prev.filter((item) => item !== "White")
                  : [...prev, "White"]
              )
            }
          >
            <p
              className={`${
                colors.includes("White") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              WHITE
            </p>
          </div>
          <div
            onClick={() =>
              setColors((prev) =>
                prev.includes("Green")
                  ? prev.filter((item) => item !== "Green")
                  : [...prev, "Green"]
              )
            }
          >
            <p
              className={`${
                colors.includes("Green") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              GREEN
            </p>
          </div>
          <div
            onClick={() =>
              setColors((prev) =>
                prev.includes("Blue")
                  ? prev.filter((item) => item !== "Blue")
                  : [...prev, "Blue"]
              )
            }
          >
            <p
              className={`${
                colors.includes("Blue") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              BLUE
            </p>
          </div>
          <div
            onClick={() =>
              setColors((prev) =>
                prev.includes("Red")
                  ? prev.filter((item) => item !== "Red")
                  : [...prev, "Red"]
              )
            }
          >
            <p
              className={`${
                colors.includes("Red") ? "bg-pink-100" : "bg-slate-200"
              } px-3 py-1 cursor-pointer`}
            >
              RED
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="bestseller"
          onChange={() => setBestseller((prev) => !prev)}
          checked={bestseller}
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to Bestseller
        </label>
      </div>
      <button
        type="submit"
        className="w-28 py-3 mt-4 bg-black text-white"
        disabled={loader}
      >
        {loader ? "Adding..." : "Add"}
      </button>
    </form>
  );
};

export default Add;
