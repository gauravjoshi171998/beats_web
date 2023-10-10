import React from "react";
import Carousel from "react-elastic-carousel";
import TestimonialCard from "@/component/testimonialCard/TestimonialCard";
import UserImg from "../../assest/Image/gymImg5.svg";
import UserImg1 from "../../assest/Image/gymImg6.svg";
import UserImg2 from "../../assest/Image/gymImg7.svg";
import UserImg3 from "../../assest/Image/gymImg8.svg";
import UserImg4 from "../../assest/Image/gymImg9.svg";
import UserImg5 from "../../assest/Image/gymImg10.svg";
import UserImg6 from "../../assest/Image/gymImg11.svg";
import UserImg7 from "../../assest/Image/gymImg12.svg";

const CollapsibleTestimonial = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 },
  ];
  return (
    <div className="containe mx-auto px-10 py-20">
      <Carousel breakPoints={breakPoints}>
        <TestimonialCard UserImag={UserImg} name="Brock Lesner" />
        <TestimonialCard UserImag={UserImg1} name="Roman Reign" />
        <TestimonialCard UserImag={UserImg2} name="Randy Orton" />
        <TestimonialCard UserImag={UserImg3} name="Unsertaker" />
        <TestimonialCard UserImag={UserImg4} name="Big Show" />
        <TestimonialCard UserImag={UserImg5} name="Dean Ambrose" />
        <TestimonialCard UserImag={UserImg6} name="Seth Rollings" />
        <TestimonialCard UserImag={UserImg7} name="John Cena" />
      </Carousel>
    </div>
  );
};

export default CollapsibleTestimonial;
