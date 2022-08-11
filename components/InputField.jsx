import React from "react";

export default function InputField({ placeholder, type, value, setValue }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="p-4 outline-none border border-gray-300 w-full rounded-md focus:border-blue-500"
    />
  );
}
