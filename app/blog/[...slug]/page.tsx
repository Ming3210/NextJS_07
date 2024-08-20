import React from "react";

export default function B8(props: any) {
  const { params } = props;

  console.log(params);

  const path = params.slug.join("/");

  return <div>{`Bạn đang xem blog với đường dẫn: ${path}`}</div>;
}
