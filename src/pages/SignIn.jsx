import { FormLabel, Input, StyledEngineProvider } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import { stateContextCustom } from "../context/StateContext";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { SequenceSpinner } from "react-spinners-kit";

export default function SignIn() {
  const { showPass, toggleShowPass } = stateContextCustom();
  const [email, setEmail] = useState("mazanovsky@nft.com");
  const [password, setPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const handleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      nav("/");
    }, 2000);
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#070B24] flex justify-center items-center">
        <SequenceSpinner size={40} backColor="#BA3CD3" />
      </div>
    );
  }

  return (
    <StyledEngineProvider injectFirst>
      <div className="w-full auth-bg flex bg-transparent h-screen fixed">
        <div className="lg:basis-1/2 bg-transparent backdrop-blur-xs rounded-xl mx-auto h-screen px-5 lg:px-[58px] animate__animated animate__fadeInLeft">
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
            <h2 className="text-2xl text-slate-300 font-bold mb-2">
              Welcome back!{" "}
            </h2>
            <p className="text-slate-300 text-sm">
              Enter your email address and password to access admin panel
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="w-full">
                  <FormLabel className="text-xs mb-2 font-bold text-slate-300">
                    Email Address
                  </FormLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    color="white"
                    type="email"
                    className="text-xs border rounded-full bg-transparent text-slate-300"
                    placeholder="Your email address"
                    value={email}
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <FormLabel className="text-xs text-slate-300 mb-2 font-bold">
                      Your Password
                    </FormLabel>
                    <span className="cursor-pointer text-xs text-slate-300">
                      Forgot password?
                    </span>
                  </div>
                  <div className="relative">
                    <Input
                      onChange={(e) => setPassword(e.target.value)}
                      color="white"
                      type={showPass ? "text" : "password"}
                      className="text-xs border rounded-full bg-transparent text-slate-300 relative"
                      placeholder="Your password"
                      value={password}
                    />
                    <div
                      onClick={toggleShowPass}
                      className="absolute right-5 text-slate-300 bottom-3"
                    >
                      {!showPass ? <LiaEye /> : <LiaEyeSlash />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={handleSignIn}
              className="transform duration-1000 my-10 w-fit transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full"
            >
              <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                <button className="px-10 py-2 text-sm  font-bold text-heading_text">
                  SIGN IN
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center gap-2 absolute bottom-0 lg:py-10 py-9">
            <p className="text-sm text-slate-300">Don't have an account yet?</p>
            <Link
              to="/sign-up"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]  text-sm font-bold cursor-pointer"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div className="basis-1/2 hidden lg:block h-screen brightness-50 animate__animated animate__fadeInRight">
          {/* <img
              className="w-full h-screen object-cover"
              src="https://themebeyond.com/html/nftmak/assets/img/banner/banner_bg.jpg"
              alt=""
            /> */}
        </div>
      </div>
    </StyledEngineProvider>
  );
}
