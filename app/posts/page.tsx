"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function B1() {
  const searchParam = useSearchParams();
  const search = searchParam.get("search");
  const [value, setValue] = useState<any>("");
  const route = useRouter();
  const handleChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const handleClick: any = () => {
    route.push(`/posts?search=${encodeURIComponent(value)}`);
    setValue("");
  };
  return (
    <div>
      <h2>B1+B2</h2>
      <h3>Giá trị tìm kiếm: {search}</h3>
      <input onChange={handleChange} type="text" className="border-2 mr-4" />
      <button
        onClick={handleClick}
        className="w-[80px] h-[40px] bg-slate-800 text-white rounded-md"
      >
        Tìm kiếm
      </button>
    </div>
  );
}
