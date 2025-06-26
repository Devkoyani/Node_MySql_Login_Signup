import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5050/login", { username, password })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message);
        } else {
          throw new Error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || "Server error");
      });
  };

  return (
    <div className="min-h-screen bg-gray-600 p-12 flex items-center justify-center">
      <div className="w-full max-w-sm bg-white p-6 rounded-3xl shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1 text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center text-sm text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-600 underline">
            Sign up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
