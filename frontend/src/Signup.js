import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (password.length < 6) {
      toast.warn("Password must be at least 6 characters");
      return;
    }

    axios
      .post("http://localhost:5050/signup", { username, password })
      .then((res) => {
        if (res.data.success) {
          toast.success(res.data.message + " ,Redirecting...");
          setTimeout(() => {
            navigate("/login");
          }, 2000);
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
        <h1 className="text-2xl font-bold mb-4 text-center">Sign Up</h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block mb-1 text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 px-3 py-2 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-800 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
