import { log } from "console";
import { useParams } from "next/navigation";
import React from "react";

export default function page(props: any) {
  const { params } = props;
  console.log(params);

  return <div>page :{params.slug}</div>;
}
