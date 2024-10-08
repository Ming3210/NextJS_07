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

export default function page(props: any) {
  const { params } = props;

  console.log(params);

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

  const courseDetail = course.find((c) => toSlug(c.name) === params.slug[0]);
  return (
    <div>
      <h1>{courseDetail?.name}</h1>
      <p>{courseDetail?.duration}</p>
      <p>{courseDetail?.lecture}</p>
      <img src={courseDetail?.image} alt={courseDetail?.name} />
    </div>
  );
}
