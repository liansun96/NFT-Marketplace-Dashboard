import { FormLabel, Input, StyledEngineProvider } from "@mui/joy";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "animate.css";
import { stateContextCustom } from "../context/StateContext";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { SequenceSpinner } from "react-spinners-kit";
import {
  BiLogoGoogle,
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
} from "react-icons/bi";
import Swal from "sweetalert2";


export default function SignIn() {
  const { showPass, toggleShowPass, setToken } = stateContextCustom();
  const [email, setEmail] = useState("mazanovsky@nft.com");
  const [password, setPassword] = useState("password");
  const [isLoading, setIsLoading] = useState(false);
  const nav = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault()
    if (email === "mazanovsky@nft.com" && password === "password") {
      setIsLoading(true);
      setToken(true)
      setTimeout(() => {
        setIsLoading(false);
        nav("/")
      }, 2000);
    } else {
      Swal.fire({
        // icon: 'error',
        // title: 'Oops...',
        confirmButtonColor: "#B73DF8",
        confirmButtonText: "Try again!",
        background: "#050409",
        color: "#FFF",
        text: 'Email or password went wrong!',
        footer: '<a href="">Forgot password?</a>'
      })
    }
  };

  if (isLoading) {
    return (
      <div className="w-full h-screen bg-[#070B24] flex justify-center items-center">
        <SequenceSpinner size={50} backColor="#BA3CD3" />
      </div>
    );
  }

  return (
    <StyledEngineProvider injectFirst>
      <main className="w-screen h-screen auth-bg overflow-y-scroll overflow-hidden">
        {/* logo */}
        <div className="flex lg:fixed gap-2 items-center p-10">
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
        {/* form */}
        <div className="w-full justify-center flex flex-col bg-transparent lg:h-screen ">
          <div className="lg:basis-1/3 basis-full bg-transparent lg:backdrop-blur-3xl rounded-xl mx-auto px-5 lg:px-[58px] animate__animated animate__flipInY">
            <div className="lg:my-10 mb-10 text-center w-80">
              <h2 className="text-2xl text-slate-300 font-bold mb-2">
                Welcome back!{" "}
              </h2>
              <p className="text-slate-300 text-md">
                Enter your email address and password to access admin panel
              </p>
            </div>
            <form>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
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
                        className="absolute right-5 text-slate-300 cursor-pointer bottom-3"
                      >
                        {!showPass ? <LiaEye /> : <LiaEyeSlash />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={handleSignIn}
                className="transform duration-1000 mt-9 text-center transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full"
              >
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <button className="px-10 py-2 text-sm  font-bold text-heading_text">
                    SIGN IN
                  </button>
                </div>
              </div>
              <div className="text-center text-md my-5 text-slate-400">
                <p>Or continue with</p>
              </div>
              <div className="flex gap-3 justify-center mb-10 ">
                <button className="w-10 h-10 bg-[#1D1933] hover:bg-gradient-to-r from-[#B73DD5] to-[#6945EB] transition-all ease-in duration-100  flex items-center justify-center text-xl rounded-full text-[#E6E6D4]">
                  <BiLogoGoogle />
                </button>
                <button className="w-10 h-10 bg-[#1D1933] hover:bg-gradient-to-r from-[#B73DD5] to-[#6945EB] transition-all ease-in duration-100  flex items-center justify-center text-xl rounded-full text-[#E6E6D4]">
                  <BiLogoFacebook />
                </button>
                <button className="w-10 h-10 bg-[#1D1933] hover:bg-gradient-to-r from-[#B73DD5] to-[#6945EB] transition-all ease-in duration-100  flex items-center justify-center text-xl rounded-full text-[#E6E6D4]">
                  <BiLogoTwitter />
                </button>
                <button className="w-10 h-10 bg-[#1D1933] hover:bg-gradient-to-r from-[#B73DD5] to-[#6945EB] transition-all ease-in duration-300  flex items-center justify-center text-xl rounded-full text-[#E6E6D4]">
                  <BiLogoLinkedin />
                </button>
              </div>
            </form>
            <div className="flex items-center gap-2 py-10 ">
              <p className="text-md text-slate-300">
                Don't have an account yet?
              </p>
              <Link
                to="/sign-up"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]  text-md font-bold cursor-pointer"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </main>
    </StyledEngineProvider>
  );
}
