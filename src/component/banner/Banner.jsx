import Image from "next/image";
import React from "react";
import style from "../banner/banner.module.css";
import Text from "../../AssestImage";

const Banner = () => {
  return (
    <div className={style.BannerContainer}>
      <Image src={Text.banText} className={style.imageStyles} />
    </div>
  );
};

export default Banner;
