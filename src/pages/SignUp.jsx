import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { VisibilityOffOutlined, VisibilityRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // For navigation

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible((prev) => !prev);
  const API_BASE_URL = "https://bitbuzz-api.onrender.com/api/v1/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}auth/register`, {
        email,
        userName,
        password,
      });
      console.log("Registration successful", response.data);
      // Redirect to dashboard after successful registration
      navigate("/");
    } catch (error) {
      setError(error.response.data.message || "Login failed");
      console.error("Registration failed", error);
    } finally {
      setLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="w-full font-space-mono grid grid-cols-1 md:grid-cols-2 object-contain bg-bottom relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-5 py-10 sm:p-20 md:py-10 md:px-28 overflow-y-auto h-full flex flex-col justify-center items-start"
      >
        <h1 className="font-semibold text-2xl md:text-3xl text-app-black mb-4">
          Register to Bitbuzz
        </h1>

        <input
          placeholder="User Name"
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="placeholder:text-app-black placeholder:font-medium w-full p-3 font-space-mono border-app-black border rounded-lg my-4"
        />
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="placeholder:text-app-black placeholder:font-medium w-full p-3 font-space-mono border-app-black border rounded-lg my-4"
        />

        <div className="w-full relative">
          <input
            type={isVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="placeholder:text-app-black placeholder:font-medium w-full p-3 font-space-mono border-app-black border rounded-lg my-4"
          />
          <div className="absolute right-4 top-5" onClick={toggleVisibility}>
            <IconButton>
              {isVisible ? <VisibilityOffOutlined /> : <VisibilityRounded />}
            </IconButton>
          </div>
        </div>

        {/* Conditional rendering based on loading state */}
        {loading ? (
          <button
            type="button"
            className="w-full rounded-lg bg-gray-300 text-white p-4 mt-5 cursor-not-allowed ease transition-all shadow font-medium"
            disabled
          >
            Loading...
          </button>
        ) : (
          <button
            type="submit"
            className="w-full rounded-lg bg-primary-purple text-white p-4 mt-5 hover:bg-white ease transition-all hover:text-primary-purple shadow font-medium"
          >
            Sign Up
          </button>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="w-full text-center mt-5">
          Already have an account?{" "}
          <Link className="font-semibold" to="/auth/login">
            Log In
          </Link>
        </div>
      </form>

      <div className="bg-auth-img p-10 bg-no-repeat bg-cover h-screen sticky overflow-hidden top-0 bottom-0 md:block hidden"></div>
    </div>
  );
};

export default SignUpPage;
