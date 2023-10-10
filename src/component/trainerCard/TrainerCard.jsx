import React from "react";
import style from "../trainerCard/trainercard.module.css";
import Image from "next/image";
const TrainerCard = ({head, Note}) => {
  return (
    <div className={style.TrainerContainer}>
      <div className={style.TrainerContent}>
        <Image src={Note} className={style.trainerImg}/>
        <h4>{head}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer mi
          mi, imperdiet quidem rerum facilis est.
        </p>
        <button>SEND MESSAGE</button>
      </div>
    </div>
  );
};

export default TrainerCard;
