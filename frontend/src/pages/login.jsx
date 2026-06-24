import { useState } from "react";
import api from "../api/axios";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [isSuccess, setIsSuccess] = useState(false)
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
      const res = await api.post("/auth/logIn", form);
      localStorage.setItem("token", res.data.token);

      setMsg(res.data.message);
      setIsSuccess(true)

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setMsg(err.res?.data?.message || err.message);
      setIsSuccess(false)
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-200">
      <div className="w-1/4 bg-white p-8 rounded-lg shadow-lg  flex flex-col items-center">
        <h1 className="text-3xl font-semibold pb-5 text-cyan-700">Login</h1>
        {msg && <h3 className={isSuccess? "text-green-500" : "text-red-500"}>{msg}</h3>}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col items-center"
        >
          <h3 className="font-sans text-lg pt-1">Email</h3>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
            className="border border-gray-500 rounded-md px-5 py-2 w-full"
            required
          />
          <h3 className="font-sans text-lg">Password</h3>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={form.password}
            className="border border-gray-500 rounded-md px-5 py-2 w-full"
            required
          />
          <br />
          <button
            type="submit"
            className="bg-cyan-500 py-2 px-7 font-medium text-2xl rounded-2xl active:scale-101"
          >
            LogIn
          </button>
        </form>
        <div className="w-full flex flex-col items-end text-xl text-blue-500 pr-8 pt-4 underline">
          <Link to="../singIn">New User?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
