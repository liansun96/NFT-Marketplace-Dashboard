import { FormLabel, Input, StyledEngineProvider } from "@mui/joy";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "animate.css";
import { stateContextCustom } from "../context/StateContext";
import { LiaEye, LiaEyeSlash } from "react-icons/lia";
import { TypeAnimation } from "react-type-animation";
import { BiLogoFacebook, BiLogoGoogle, BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");

  const { showPass, toggleShowPass} =
    stateContextCustom();
  return (
    <StyledEngineProvider injectFirst>
      <main className="w-screen h-screen auth-bg overflow-hidden">
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
          <div className="lg:basis-1/3 bg-transparent lg:backdrop-blur-3xl rounded-xl mx-auto px-5 lg:px-[58px] animate__animated animate__flipInY">
            <div className="lg:my-10 mb-5 text-center w-80">
              <h2 className="text-2xl text-slate-300 font-bold mb-2">
                Create Account
              </h2>
              <p className="text-slate-300 text-md">
              Create your account, it takes less than a minute
              </p>
            </div>
            <form>
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-5">
                <div className="w-full">
                <FormLabel className="text-xs font-bold text-slate-300 mb-2">
                     Full Name{" "}
                  </FormLabel>
                    <Input
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      color=""
                      className="text-xs border bg-transparent rounded-full text-slate-300 "
                      placeholder="Your full name"
                    />
                  </div>
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
                        className="absolute right-5 text-slate-300 bottom-3 cursor-pointer"
                      >
                        {!showPass ? <LiaEye /> : <LiaEyeSlash />}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to={"/sign-in"}>
              <div
                className="transform duration-1000 mt-9 text-center transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full"
              >
                <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
                  <button className="px-10 py-2 text-sm  font-bold text-heading_text">
                    SIGN UP
                  </button>
                </div>
              </div>
              </Link>
              <div className="text-center text-md my-5 text-slate-400">
                <p>Or continue with</p>
              </div>
              <div className="flex gap-3 justify-center">
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
            <div className="flex items-center justify-center gap-2 py-10">
              <p className="text-md text-slate-300">
                Already have an account?
              </p>
              <Link
                to="/sign-in"
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]  text-md font-bold cursor-pointer"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
    </StyledEngineProvider>
    
    // <StyledEngineProvider injectFirst>
    //   <main className="w-screen h-screen bg">
    //     <div className="flex lg:fixed gap-2 items-center p-10">
    //       <img
    //         className="w-6 h-fit"
    //         src="https://themebeyond.com/html/nftmak/assets/img/logo/logo.png"
    //         alt=""
    //       />
    //       <img
    //         className=""
    //         src="https://themebeyond.com/html/nftmak/assets/img/logo/naftmak.svg"
    //         alt=""
    //       />
    //     </div>
    //     <div className="w-full flex justify-center flex-col h-screen">
    //       <div className="lg:basis-1/3 border rounded-lg mx-auto px-5 lg:px-[58px] animate__animated animate__fadeInLeft">
    //         <div className="my-10">
    //           <h2 className="text-2xl text-slate-300 font-bold mb-2">
    //             Create your account
    //           </h2>
    //           <p className="text-slate-300 text-sm">
    //             Don't have an account? Create your account, it takes less than a
    //             minute
    //           </p>
    //         </div>
    //         <form>
    //           <div className="flex flex-col gap-5">
    //             <div className="flex flex-col gap-5">
    //               <div className="w-full">
    //                 <FormLabel className="text-xs font-bold text-slate-300 mb-2">
    //                   Full Name{" "}
    //                 </FormLabel>
    //                 <Input
    //                   onChange={(e) => setName(e.target.value)}
    //                   type="text"
    //                   color=""
    //                   className="text-xs border bg-transparent rounded-full text-slate-300 "
    //                   placeholder="Your full name"
    //                 />
    //               </div>
    //               <div className="w-full">
    //                 <FormLabel className="text-xs font-bold text-slate-300 mb-2">
    //                   Email Address
    //                 </FormLabel>
    //                 <Input
    //                   onChange={(e) => setEmail(e.target.value)}
    //                   color=""
    //                   type="email"
    //                   className="text-xs border rounded-full bg-transparent text-slate-300"
    //                   placeholder="Your email address"
    //                   value={email}
    //                 />
    //               </div>
    //             </div>
    //             <div className="flex flex-col gap-5 ">
    //               <div className="w-full">
    //                 <FormLabel className="text-xs font-bold text-slate-300 mb-2">
    //                   Your Password
    //                 </FormLabel>
    //                 <div className="relative">
    //                   <Input
    //                     onChange={(e) => setPassword(e.target.value)}
    //                     color=""
    //                     type={showPass ? "text" : "password"}
    //                     className="text-xs border rounded-full bg-transparent text-slate-300 relative"
    //                     placeholder="Your password"
    //                     value={password}
    //                   />
    //                   <div
    //                     onClick={toggleShowPass}
    //                     className="absolute right-5 text-slate-300 bottom-3"
    //                   >
    //                     {!showPass ? <LiaEye /> : <LiaEyeSlash />}
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="w-full">
    //                 <FormLabel className="text-xs font-bold text-slate-300 mb-2">
    //                   Confirm Password
    //                 </FormLabel>
    //                 <div className="relative">
    //                   <Input
    //                     onChange={(e) => setPasswordConfirm(e.target.value)}
    //                     type={showPassConfirm ? "text" : "password"}
    //                     color=""
    //                     className="text-xs bg-transparent border rounded-full text-slate-300 relative"
    //                     placeholder="Your password again"
    //                   />
    //                   <div
    //                     onClick={toggleShowPassConfirm}
    //                     className="absolute text-slate-300 right-5 bottom-3"
    //                   >
    //                     {!showPassConfirm ? <LiaEye /> : <LiaEyeSlash />}
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex items-center mt-5 gap-3">
    //             <input
    //               id="checkbox"
    //               className="accent-purple w-8"
    //               type="checkbox"
    //             />
    //             <label
    //               htmlFor="checkbox"
    //               className="text-[0.8rem] text-slate-300"
    //             >
    //               I agree with{" "}
    //               <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]">
    //                 Terms & Conditions
    //               </span>{" "}
    //               and have understood{" "}
    //               <span className="cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB]">
    //                 Privacy Policy
    //               </span>
    //             </label>
    //           </div>
    //           <Link to={"/sign-in"}>
    //             <div className="transform duration-1000 my-10 w-fit transition hover:bg-gradient-to-l bg-gradient-to-r from-[#bc3cd3] to-[#6345ed] p-1 rounded-full">
    //               <div className="border border-[#fff] border-dashed bg-transparent rounded-3xl">
    //                 <button className="px-10 py-2 text-sm  font-bold text-heading_text">
    //                   SIGN UP
    //                 </button>
    //               </div>
    //             </div>
    //           </Link>
    //         </form>
    //         <div className="flex items-center gap-2 lg:py-10 py-9">
    //           <p className="text-sm text-slate-400">Already Register?</p>
    //           <Link
    //             to="/sign-in"
    //             className="text-transparent bg-clip-text bg-gradient-to-r from-[#B73DD5] to-[#6945EB] text-sm font-bold cursor-pointer"
    //           >
    //             Sign In
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </StyledEngineProvider>
  );
}
