import Head from "next/head";
import React, { useState } from "react";
import InputField from "../components/InputField";

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-12 text-center bg-[#F0F2F5] h-screen">
      <div className="w-[90%] mx-auto">
        <h1 className="text-6xl font-black text-blue-500">facebook</h1>
        <p className="mt-2 text-xl">
          Facebook helps you connect and share with the people in your life.
        </p>
      </div>
      <div className="w-[80%] mx-auto">
        <form className="w-full drop-shadow-xl bg-white py-4 mx-auto border-t border-gray-100 mt-10 flex justify-center rounded-md">
          <div className="w-[90%] space-y-4">
            <InputField
              type="email"
              placeholder="Email address or phone number"
              value={email}
              setValue={setEmail}
            />
            <InputField
              type="password"
              placeholder="Password"
              value={password}
              setValue={setPassword}
            />
            <button
              type="submit"
              className="py-2 bg-blue-500 w-full rounded-md font-bold text-white text-xl capitalize"
              onClick={(e) => handleOnClick(e)}
            >
              Log in
            </button>
            <p className="text-xs text-blue-500 hover:underline cursor-pointer">
              Forgotten password?
            </p>
            <div className="border-[0.1px] border-gray-300" />
            <button className="capitalize p-2 bg-green-500 rounded-md text-xl text-white font-bold">
              Create new account
            </button>
          </div>
        </form>
        <p className="mt-5 text-xs">
          <span className="capitalize font-bold">Create a page</span> for a
          celebrity, brand or business.
        </p>
      </div>
    </div>
  );
}
