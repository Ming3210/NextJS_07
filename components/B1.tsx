"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function B1() {
  const [value, setValue] = useState<any>();
  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const search = () => {
    console.log(value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        className="border-2 border-slate-800 mr-3"
      />
      <Link href={`/posts?search=${value}`}>
        {" "}
        <button
          onClick={search}
          className="bg-slate-900 w-[80px] rounded-md text-white h-[50px]"
        >
          Tìm kiếm
        </button>
      </Link>
    </div>
  );
}
