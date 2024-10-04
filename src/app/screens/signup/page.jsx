import Image from "next/image";
import React from "react";
import loginpic from "../../assets/img1.png";

const Page = () => {
  return (
    <div className="flex max-lg:flex-col  justify-around items-center h-screen">
      <div className="bg-[#5F9C50] rounded-xl">
        <Image
          className="p-20 "
          src={loginpic}
          alt="login photo"
          width={500}
          height={400}
        />
      </div>
      <div className=" flex-col w-1/2 max-lg:w-11/12 max-lg:mt-8  ">
        <div className=" text-4xl font-bold justify-center flex">
          Signup
          </div>
        <div className="  text-sm text-slate-600 justify-center flex">
          Welcome back! Please enter your details
        </div>
        <div className="mt-20 text-xl text-slate-800 justify-center flex ">
          <div className=" w-4/5">
             E-mail:
          </div>
          </div>
        <div className="  rounded justify-center flex mt-1 ">
        <div className="bg-[#CFE2CB] w-4/5 rounded">
          <input type="text" className="bg-[transparent] w-full h-9" /></div>
        </div>
        <div className="mt-5 text-xl text-slate-800 justify-center flex ">
          <div className=" w-4/5">
            Password         
       </div>
          </div>
          <div className="  rounded justify-center flex mt-1 ">
        <div className="bg-[#CFE2CB] w-4/5 rounded">
          <input type="text" className="bg-[transparent] w-full h-9" /></div>
        </div>
        <div className="mt-1 text-sm text-slate-600 justify-center flex  ">
          <div className=" w-4/5 justify-end flex">
            Forgot Password ?
          </div>
          </div>
        <div className=" mt-20 text-lg justify-center flex ">
          <div className="w-20 h-8 items-center bg-[#5F9C50] flex justify-center text-white rounded">
            Signup
          </div>
        </div>
        <div className=" text-xs text-slate-600 mt-2 justify-center flex">
          Already have an account? Login
        </div>
      </div>
    </div>
  );
};

export default Page;
