import React from "react";
import style from "../gymCard/gymcard.module.css";
import Image from "next/image";
const SimpleGymCard = ({ img }) => {
  return (
    <div className={style.GymCardBox}>
      <div className={style.GynImage}>
        <Image src={img} />
      </div>
      <div className={style.GymCardText}>
       <h5>FUISION 5</h5> 
        <ul>
          <li>At-center group classes</li>
          <li>2 Sessions/month at ELITE gyms & group classes</li>
          <li>Goal-based Workouts and Meditation Sessions</li>
        </ul>
      </div>
    </div>
  );
};

export default SimpleGymCard;
