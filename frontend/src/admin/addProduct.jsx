import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/product/create", form);
      alert("Product added successfully.");
      setForm({
        title: "",
        description: "",
        price: "",
        stock: "",
        category: "",
        image: "",
      });
      navigate("/admin/productList");
    } catch (err) {
      console.log("server error", err);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/4 bg-white p-8 rounded-lg shadow-lg  flex flex-col items-center space-y-7">
        <h2 className="text-3xl font-semibold text-cyan-700 py-5">
          Add New Product
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-7 flex flex-col items-center "
        >
          {Object.keys(form).map((key) => (
            <input
              key={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key}
              className="border-2 border-gray-500 rounded px-2 py-2"
            />
          ))}
          <button
            type="submit"
            className="bg-cyan-500 px-7 py-2 my-5 font-medium text-2xl rounded-2xl active:scale-103"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
