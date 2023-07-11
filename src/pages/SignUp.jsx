import { FormLabel, Input, StyledEngineProvider } from "@mui/joy";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { stateContextCustom } from "../context/StateContext";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [password_confirmation, setPasswordConfirm] = useState("")

  const { showPass, toggleShowPass, showPassConfirm, toggleShowPassConfirm } =
    stateContextCustom();
  return (
    <StyledEngineProvider injectFirst>
      <div className="w-full flex h-screen overflow-y-scroll overflow-x-hidden auth-bg fixed">
        <div className="lg:basis-1/2 mx-auto px-5 lg:px-[58px] animate__animated animate__fadeInLeft">
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
          <div className="mb-10">
            <h2 className="text-2xl text-slate-300 font-bold mb-2">Create your account</h2>
            <p className="text-slate-300 text-sm">
              Don't have an account? Create your account, it takes less than a
              minute
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="w-full">
                  <FormLabel className="text-xs font-bold text-slate-300 mb-2">
                    Full Name{" "}
                  </FormLabel>
                  <Input
                  onChange={(e) => setName(e.target.value) }
                    type="text"
                    color="white"
                    className="text-xs border bg-transparent rounded-full text-slate-300 "
                    placeholder="Your full name"
                  />
                </div>
                <div className="w-full">
                  <FormLabel className="text-xs font-bold text-slate-300 mb-2">
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
              </div>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="w-full">
                  <FormLabel className="text-xs font-bold text-slate-300 mb-2">
                    Your Password
                  </FormLabel>
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
                <div className="w-full">
                  <FormLabel className="text-xs font-bold text-slate-300 mb-2">
                    Confirm Password
                  </FormLabel>
                  <div className="relative">
                    <Input
                    onChange={(e) => setPasswordConfirm(e.target.value)}

                      type={showPassConfirm ? "text" : "password"}
                      color="white"
                      className="text-xs bg-transparent border rounded-full text-slate-300 relative"
                      placeholder="Your password again"
                    />
                    <div
                      onClick={toggleShowPassConfirm}
                      className="absolute text-slate-300 right-5 bottom-3"
                    >
                      {!showPassConfirm ? <LiaEye /> : <LiaEyeSlash />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <input id="checkbox" className="accent-purple w-8"  type="checkbox" />
              <label
                htmlFor="checkbox"
                className="text-[0.8rem] text-slate-300"
              >
                I agree with{" "}
                <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]">
                  Terms & Conditions
                </span>{" "}
                and have understood{" "}
                <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]">
                  Privacy Policy
                </span>
              </label>
            </div>
            <Link to={"/sign-in"}>
              <div className="transform duration-1000 my-10 w-fit transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <button className="px-10 py-2 text-sm  font-bold text-heading_text">
                    SIGN UP
                  </button>
                </div>
              </div>
            </Link>
          </form>
          <div className="flex items-center gap-2 lg:absolute bottom-0 lg:py-10 py-9">
            <p className="text-sm text-slate-400">Already Register?</p>
            <Link
              to="/sign-in"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB] text-sm font-bold cursor-pointer"
            >
              Sign In
            </Link>
          </div>
        </div>
        <div className="basis-1/2 hidden lg:block h-screen">
          {/* <img
            className="w-full scale-150 h-screen object-cover origin-right animate__animated animate__fadeInRight"
            src="https://themebeyond.com/html/nftmak/assets/img/banner/banner_bg.jpg"
            alt=""
          /> */}
        </div>
      </div>
    </StyledEngineProvider>
  );
}
