import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate, useParams } from "react-router";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });

  useEffect(() => {
    const getProduct = async () => {
      const res = await api.get("/product/getAll");
      const product = res.data.find((p) => p._id === id);
      setForm(product);
    };

    getProduct();
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const allowedFields = ["title", "description", "price", "category", "image"];

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      api.put(`/product/update/${id}`, form);
      alert("Product updated successfully.");
      navigate("/admin/productList");
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/4 bg-white p-8 rounded-lg shadow-lg  flex flex-col items-center space-y-7">
        <h2 className="text-3xl font-semibold text-cyan-700 py-5">
          Update Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-7">
          {allowedFields.map((key) => {
            <input
              key={key}
              name={key}
              value={form[key]}
              onChange={handleChange}
              placeholder={key}
              className="w-full border px-3 py-2 rounded"
            />;
          })}

          <button
            type="submit"
            className="bg-cyan-500 px-7 py-2 rounded-2xl active:scale-103"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
