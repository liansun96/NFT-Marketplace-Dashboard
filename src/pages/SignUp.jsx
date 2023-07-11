import {
  FormLabel,
  Input,
  StyledEngineProvider,
} from "@mui/joy";
import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { stateContextCustom } from "../context/StateContext";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";

export default function SignUp() {
  const inputStyle = {
    "--Input-focusedThickness": "0.08rem",
    "--Input-focusedHighlight": "#00bac7",
  };
  const { showPass, toggleShowPass, showPassConfirm, toggleShowPassConfirm } =
    stateContextCustom();
  return (
    <StyledEngineProvider injectFirst>
      <div className="w-full flex bg-[#F1F5F7] h-screen fixed">
        <div className="md:basis-1/2 mx-auto px-5 lg:px-[58px] animate__animated animate__fadeInLeft">
          <img
            className="mb-20 sm:mb-5 lg:mb-20 py-7"
            src="https://d33wubrfki0l68.cloudfront.net/ba6b91b7d508187d153e48318c22d0773a9cedfc/36afa/assets/images/logo.svg"
            alt=""
          />
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Free Sign Up</h2>
            <p className="text-slate-400 text-sm">
              Don't have an account? Create your account, it takes less than a
              minute
            </p>
          </div>
          <form>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="w-full">
                  <FormLabel className="text-xs font-bold">
                    Full Name{" "}
                  </FormLabel>
                  <Input
                    sx={inputStyle}
                    type="text"
                    className="text-xs bg-[#F8FAFB] focus:shadow-[#00bac7]"
                    placeholder="Your full name"
                  />
                </div>
                <div className="w-full">
                  <FormLabel className="text-xs font-bold">
                    Email Address
                  </FormLabel>
                  <Input
                    sx={inputStyle}
                    type="email"
                    className="text-xs bg-[#F8FAFB]"
                    placeholder="Your email address"
                  />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-10">
                <div className="w-full">
                  <FormLabel className="text-xs font-bold">
                    Your Password
                  </FormLabel>
                  <div className="relative">
                    <Input
                      sx={inputStyle}
                      type={showPass ? "text" : "password"}
                      className="text-xs bg-[#F8FAFB] relative"
                      placeholder="Your password"
                    />
                    <div
                      onClick={toggleShowPass}
                      className="absolute right-5 bottom-3"
                    >
                      {!showPass ? <LiaEye /> : <LiaEyeSlash />}
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <FormLabel className="text-xs font-bold">
                    Confirm Password
                  </FormLabel>
                  <div className="relative">
                    <Input
                      sx={inputStyle}
                      type={showPassConfirm ? "text" : "password"}
                      className="text-xs bg-[#F8FAFB] relative"
                      placeholder="Your password again"
                    />
                    <div
                      onClick={toggleShowPassConfirm}
                      className="absolute right-5 bottom-3"
                    >
                      {!showPassConfirm ? <LiaEye /> : <LiaEyeSlash />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-5 gap-3">
              <input id="checkbox" type="checkbox" />
              <label
                htmlFor="checkbox"
                className="text-[0.8rem] accent-cyan-500 text-slate-800 font-semibold"
              >
                I agree with{" "}
                <span className="cursor-pointer text-[#00bac7]">
                  Terms & Conditions
                </span>{" "}
                and have understood{" "}
                <span className="cursor-pointer text-[#00bac7]">
                  Privacy Policy
                </span>
              </label>
            </div>
            <Link to={"/"}>
              <button className="px-7 mt-8 py-2.5 bg-[#00bac7] rounded-full text-sm text-white font-semibold w-fit">
                Get Started
              </button>
            </Link>
          </form>
          <div className="flex items-center gap-2 lg:absolute bottom-0 lg:py-10 py-9">
            <p className="text-sm text-slate-400">Already Register?</p>
            <Link
              to="/sign-in"
              className="text-[#00bac7] text-sm font-bold cursor-pointer"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="basis-1/2 hidden lg:block h-screen brightness-50">
          <img
            className="w-full h-screen object-cover animate__animated animate__fadeInRight"
            src="https://dashly-theme.com/assets/images/covers/sign-up-cover.jpeg"
            alt=""
          />
        </div>
      </div>
    </StyledEngineProvider>
  );
}
