import { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router";

const SingIn = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/singIn", form);
      setMsg(response.data.message);
      setIsSuccess(true)
    } catch (err) {
      setMsg(err.response?.data?.message || err.message);
      setIsSuccess(false)
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/4 bg-white p-8 rounded-lg shadow-lg  flex flex-col items-center">
        <h1 className="text-3xl font-semibold pb-5 text-cyan-700">SingIn</h1>
        <h3 className={isSuccess? "text-green-500" : "text-red-500"}>{msg}</h3>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center"
        >
          <h3 className="font-sans text-xl pt-1">Username</h3>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-md px-5 py-2 w-full"
            required
          />
          <h3 className=" font-sans text-xl">Email</h3>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-md px-5 py-2 w-full"
            required
          />
          <h3 className="font-sans text-xl">Password</h3>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            className="border-2 border-gray-500 rounded-md px-5 py-2 w-full"
            required
          />
          <br />

          <button
            type="submit"
            className="bg-cyan-500 py-2 px-7 font-semibold text-2xl rounded-2xl active:scale-101"
          >
            Submit
          </button>
        </form>
        <div className="w-full flex flex-col items-end text-xl text-blue-500 pr-8 pt-4 underline">
          <Link to="../LogIn">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
