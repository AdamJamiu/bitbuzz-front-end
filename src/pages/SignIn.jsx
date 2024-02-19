import { useState } from "react";

import { VisibilityOffOutlined, VisibilityRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import particleImg from "/images/1024.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import googleImg from "/images/google-logo.svg";
import twitterImg from "/images/twitter.svg";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false); // Track loading state
  const navigate = useNavigate(); // For navigation

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  const API_BASE_URL = "https://bitbuzz-api.onrender.com/api/v1/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}auth/login`, {
        email,
        password,
      });
      console.log("Login successful", response.data);
      navigate("/");
    } catch (error) {
      setError(error.response.data.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full font-space-mono grid grid-cols-1 md:grid-cols-2 object-contain bg-bottom relative">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-5 py-10 sm:p-20 md:py-10 md:px-28 overflow-y-auto h-max"
      >
        <h1 className="font-semibold text-2xl md:text-3xl text-app-black mb-4">
          Sign in to Bitbuzz
        </h1>

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
            Sign In
          </button>
        )}
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

        <div className="w-full flex flex-row justify-between items-center mt-4">
          <div className="flex flex-row justify-start items-center gap-2 text-app-black">
            <input type="checkbox" className="checked:bg-primary-purple" />
            <span>Stay signed in</span>
          </div>
          <p className="font-bold text-primary-purple">Forgot password?</p>
        </div>

        <div className="w-full relative">
          <hr className="my-10" />
          <p className="absolute -top-3 bg-white text-[#280F4499] right-[50%]">
            Or
          </p>
        </div>

        <button
          type="submit"
          className="w-full rounded-md border-lg border border-app-black py-3 hover:bg-purple-100 flex flex-row justify-center items-center gap-3 my-5 ease transition-all"
        >
          <img className="h-5" src={particleImg} />
          <span>Particle</span>
        </button>

        <p className="font-medium">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="hover:underline font-semibold">
            Sign up
          </Link>
        </p>
      </form>

      <div className="bg-auth-img p-10 bg-no-repeat bg-cover h-screen sticky overflow-hidden top-0 bottom-0 md:block hidden"></div>
    </div>
  );
};

export default SignInPage;
