// Library
import React from "react";
import Image from "next/image";

const ImgWrap = ({ src }) => {
  return (
    <div className="position-relative w-100 h-100">
      <Image className="img-fluid" src={src} layout="fill" objectFit="cover" />
    </div>
  );
};

export default ImgWrap;
