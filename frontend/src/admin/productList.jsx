import api from "../api/axios";
import { useState, useEffect } from "react";
import { Link } from "react-router";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await api.get("/product/getAll");
        setProducts(res.data.products);
      } catch (err) {
        console.error("Error fetching products:", err);
        setProducts([]);
      }
    };
    getProduct();
  }, []);

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/product/delete/${id}`);
      alert("Product deleted successfully.");
      const res = await api.get("/product/getAll");
      setProducts(res.data.products);
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div className="w-5xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2></h2>
        <Link></Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Stoke</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.stoke}</td>
              <td>
                <Link to={`/admin/updateProduct/${product._id}`} className="text-blue-500 hover:underline mr-4">
                  Edit
                </Link>
                <button
                  onClick={() => {
                    deleteProduct(product._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
