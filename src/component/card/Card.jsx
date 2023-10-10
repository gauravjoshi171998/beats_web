import React from "react";
import style from "../card/card.module.css";
import Image from "next/image";
import Body from "../../AssestImage";

const SimpleCard = () => {
  return (
    <div className={style.CardContainer}>
      <div className={style.imgCard}>
        <Image src={Body.body} className={style.bodyImage}/>
      </div>
      <div className={style.textCard}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
        ab.{" "}
        
      </div>
    </div>
  );
};

export default SimpleCard;
