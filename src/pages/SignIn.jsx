import { FormLabel, Input, StyledEngineProvider } from "@mui/joy";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { stateContextCustom } from "../context/StateContext";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

export default function SignIn() {
  const inputStyle = {
    // "--Input-focusedThickness": "0.08rem",
    // "--Input-focusedHighlight": "purple",
  };
  const { showPass, toggleShowPass } = stateContextCustom();
  const [email, setEmail] = useState("admin@gmail.com")
  const [password, setPassword] = useState("password")

  return (
    <StyledEngineProvider injectFirst>
      <div className="w-full auth-bg flex bg-transparent h-screen fixed">
        <div className="bg-transparent backdrop-blur-3xl rounded-xl mx-auto h-fit px-5 lg:px-[58px] animate__animated animate__fadeInLeft">
          <div className="flex gap-2 items-center my-10">
            <img
              className="w-6 h-fit"
              src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
              alt=""
            />
            <img
              className=""
              src="https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
              alt=""
            />
          </div>
          <div className="mb-10 ">
            <h2 className="text-2xl text-white font-bold mb-2">Welcome back! </h2>
            <p className="text-white text-sm">
              Enter your email address and password to access admin panel
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5 lg:gap-10">
                <div className="w-full">
                  <FormLabel className="text-xs mb-2 font-bold text-white">
                    Email Address
                  </FormLabel>
                  <Input
                  onChange={(e) => setEmail(e.target.value)}
                    sx={inputStyle}
                    color="white"
                    type="email"
                    className="text-xs border rounded-full bg-transparent text-white"
                    placeholder="Your email address"
                    value={email}
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <FormLabel className="text-xs text-white mb-2 font-bold">
                      Your Password
                    </FormLabel>
                    <span className="cursor-pointer text-xs text-white">
                      Forgot password?
                    </span>
                  </div>
                  <div className="relative">
                    <Input
                    onChange={(e) => setPassword(e.target.value) }
                      sx={inputStyle}
                      color="white"
                      type={showPass ? "text" : "password"}
                      className="text-xs border rounded-full bg-transparent text-white relative"
                      placeholder="Your password"
                      value={password}
                    />
                    <div
                      onClick={toggleShowPass}
                      className="absolute right-5 text-white bottom-3"
                    >
                      {!showPass ? <LiaEye /> : <LiaEyeSlash />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/">
              <div className="transform duration-1000 my-10 w-fit transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <button className="px-10 py-2 text-sm  font-bold text-heading_text">
                    SIGN IN
                  </button>
                </div>
              </div>
            </Link>
          </form>
          <div className="flex items-center gap-2 bottom-0 lg:py-10 py-9">
            <p className="text-sm text-white">Don't have an account yet?</p>
            <Link
              to="/sign-up"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]  text-sm font-bold cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
        {/* <div className="basis-1/2 hidden lg:block h-screen brightness-50 animate__animated animate__fadeInRight">
            <img
              className="w-full h-screen object-cover"
              src="https://dashly-theme.com/assets/images/covers/sign-in-cover.jpeg"
              alt=""
            />
          </div> */}
      </div>
    </StyledEngineProvider>
  );
}
