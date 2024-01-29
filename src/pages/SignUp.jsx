import { useState } from "react";

import { VisibilityOffOutlined, VisibilityRounded } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import googleImg from "/images/google-logo.svg"
import facebookImg from "/images/facebook.svg"
import twitterImg from "/images/twitter.svg"
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [isVisible, setIsVisible] = useState(false)

    const toggleVisibility = () => setIsVisible(prev => !prev)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("submitted")
    }

    return (
        <div className="w-full font-space-mono grid grid-cols-1 md:grid-cols-2 object-contain bg-bottom relative">
            <form onSubmit={handleSubmit} className="bg-white px-5 py-10 sm:p-20 md:py-10 md:px-28 overflow-y-auto h-full flex flex-col justify-center items-start">
                <h1 className="font-semibold text-2xl md:text-3xl text-app-black mb-4">Sign in to Bitbuzz</h1>

                <input placeholder="Email" type="email" className="placeholder:text-app-black placeholder:font-medium w-full p-3 font-space-mono border-app-black border rounded-lg my-4" />

                <div className="w-full relative">
                    <input type={isVisible ? "text" : "password"} placeholder="Password" className="placeholder:text-app-black placeholder:font-medium w-full p-3 font-space-mono border-app-black border rounded-lg my-4" />
                    <div className="absolute right-4 top-5" onClick={toggleVisibility}>
                        <IconButton>
                            {isVisible ? <VisibilityOffOutlined /> : <VisibilityRounded />}
                        </IconButton>
                    </div>
                </div>

                <button type="submit" className="w-full rounded-lg bg-primary-purple text-white p-4 mt-5 hover:bg-white ease transition-all hover:text-primary-purple shadow font-medium">
                    Sign In
                </button>

                <div className="w-full flex flex-row justify-between items-center mt-5">
                    <div className="flex flex-row justify-start items-start gap-3 text-app-black">
                        <input type="checkbox" className="checked:bg-primary-purple" />

                        <div className="text-sm">I agree to Bitbuzz <Link className="font-semibold" to="/sign-up">User Agreement</Link> and <Link className="font-semibold" to="/sign-up">Private Policy</Link></div>
                    </div>
                </div>
                <div className="w-full text-center mt-5">Already have an account? <Link className="font-semibold" to="/">Log In</Link></div>
            </form>

            <div className="bg-primary-purple bg-login-img p-10 h-screen sticky overflow-hidden top-0 bottom-0 md:block hidden">

            </div>
        </div>
    )
}

export default SignUpPage;