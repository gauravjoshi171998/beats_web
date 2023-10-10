import React from "react";
import style from "../testimonialCard/testcard.module.css";
import Image from "next/image";
const TestimonialCard = ({UserImag,name}) => {
  return (
    <div className={style.TestimonialCard}>
      <div className={style.userImg}>
        <Image src={UserImag} className={style.UserImag}/>
      </div>
      <h5>{name}</h5>
      <p>
        A paragraph is a self-contained unit of discourse in writing dealing
        with a particular point or idea. Though not required by the orthographic
        conventions of any language with a writing system, paragraphs are a
        conventional means of organizing extended segments of prose.
      </p>
    </div>
  );
};

export default TestimonialCard;
