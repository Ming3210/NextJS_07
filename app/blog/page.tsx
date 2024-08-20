import Link from "next/link";
import React from "react";

const toSlug = (str: string) => {
  return str
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize accented characters
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .trim() // Trim leading/trailing spaces
    .replace(/\s+/g, "-"); // Replace spaces with hyphens
};

export default function B8(props: any) {
  //   const { params } = props;

  //   console.log(params);

  // const path = params.slug.join("/");
  const course = [
    {
      id: 1,
      name: "Lập trình cơ bản C",
      duration: "100 giờ",
      lecture: "Ngọ Văn Quý",
      image:
        "https://th.bing.com/th/id/OIP.BFSK2IzHAeX6J0Cb5zTAIAHaIL?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Lập trình Java core",
      duration: "101 giờ",
      lecture: "Ngọ Văn Quỷ",
      image:
        "https://th.bing.com/th/id/OIP._Lm_T3scKhVEVFC54gcRxwHaE8?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Lập trình PHP",
      duration: "102 giờ",
      lecture: "Ngọ Văn Quỳ",
      image:
        "https://th.bing.com/th/id/OIP.sYfjsZhbCqc4CT2XzgKKtgHaD4?rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Lập trình ReactJS",
      duration: "103 giờ",
      lecture: "Ngọ Văn Quỵ",
      image:
        "https://oneteamsolutions.in/blogoneteam/wp-content/uploads/2020/05/REACT-JS-KOCHI.png",
    },
  ];

  return (
    <div className="flex">
      {course.map((item: any) => (
        <div key={item.id} className="mr-6">
          <img
            src={item.image}
            className="w-[160px] h-[160px]"
            alt={item.name}
          />
          <h3>{item.name}</h3>
          <Link href={`/blog/${toSlug(item.name)}`}>
            <div>Xem chi tiết</div>
          </Link>
        </div>
      ))}
    </div>
  );
  // <div>{`Bạn đang xem blog với đường dẫn: ${path}`}</div>
}
