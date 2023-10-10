import React from "react";
import Carousel from "react-elastic-carousel";
import ImageCard from "@/component/imageCard/ImageCard";
import Gym from "../../assest/Image/gymImg.svg";
import Gym1 from "../../assest/Image/gymImg1.svg";
import Gym2 from "../../assest/Image/gymImg2.svg";
import Gym3 from "../../assest/Image/gymImg3.svg";
import Gym4 from "../../assest/Image/gymImg4.svg";
import Gym5 from "../../assest/Image/gymImg5.svg";
import Gym6 from "../../assest/Image/gymImg6.svg";
import Gym7 from "../../assest/Image/gymImg7.svg";

const SwiperImage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 6 },
  ];
  return (
    <div className="containe mx-auto px-10">
      <Carousel breakPoints={breakPoints}>
        <ImageCard Gym={Gym} />
        <ImageCard Gym={Gym1} />
        <ImageCard Gym={Gym2} />
        <ImageCard Gym={Gym3} />
        <ImageCard Gym={Gym4} />
        <ImageCard Gym={Gym5} />
        <ImageCard Gym={Gym6} />
        <ImageCard Gym={Gym7} />
        <ImageCard Gym={Gym} />
        <ImageCard Gym={Gym1} />
        <ImageCard Gym={Gym2} />
        <ImageCard Gym={Gym3} />
        <ImageCard Gym={Gym4} />
        <ImageCard Gym={Gym5} />
        <ImageCard Gym={Gym6} />
        <ImageCard Gym={Gym7} />
      </Carousel>
    </div>
  );
};

export default SwiperImage;
