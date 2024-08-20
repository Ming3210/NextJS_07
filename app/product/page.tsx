"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function B3() {
  const [inputValue, setInputValue] = useState<any>({
    name: "",
    category: "",
  });
  const route = useRouter();

  const handleChanges = (e: any) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log(inputValue);
  };

  const handleClick: any = () => {
    route.push(
      `/products?name=${encodeURIComponent(
        inputValue.name
      )}&category=${encodeURIComponent(inputValue.category)}`
    );
  };
  const searchParam = useSearchParams();
  const name = searchParam.get("name");
  const category = searchParam.get("category");
  return (
    <div>
      <h2>B3+B4</h2>
      <h3>Tên sản phẩm: {name}</h3>
      <h3>Tên danh mục: {category}</h3>
      <input
        name="name"
        value={inputValue.name}
        onChange={handleChanges}
        type="text"
        className="border-2 h-[35px] mb-3 rounded-md w-[200px]"
        placeholder="Tìm kiếm theo tên"
      />
      <br />
      <input
        name="category"
        value={inputValue.category}
        onChange={handleChanges}
        type="text"
        className="border-2 h-[35px] mb-3 rounded-md w-[200px]"
        placeholder="Tìm kiếm theo thể loại"
      />
      <br />
      <button
        onClick={handleClick}
        className="w-[80px] h-[40px] bg-slate-800 text-white rounded-md"
      >
        Tìm kiếm
      </button>
    </div>
  );
}
