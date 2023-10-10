"use client";
import Banner from "@/component/banner/Banner";
import CollapsibleCard from "@/main/collapsiblecard/CollapsibleCard";
import SwiperImage from "@/main/swiperImage/SwiperImage";
import Image from "next/image";
import Logo from "../assest/Image/beatslogo.svg";
import CollasibleContainer from "@/main/collapsibleContainer/CollasibleContainer";
import CollapsibleTraining from "@/main/collapsibleTraining/CollapsibleTraining";
import CollapsibleVideo from "@/main/collapsibleVideo/CollapsibleVideo";
import CollapsibleTestimonial from "@/main/collapsibleTestimonial/CollapsibleTestimonial";
export default function Home() {
  return (
    <main>
      <Banner />
      <CollapsibleCard />
      <SwiperImage />
      <div className="container flex justify-center align-center py-20">
        <div className="m-auto md:w-[450px]">
          <Image src={Logo} alt="/" className="w-full" />
        </div>
      </div>
      <CollasibleContainer />
      <div className="container flex justify-center align-center pt-20">
        <div className="m-auto md:w-[450px]">
          <Image src={Logo} alt="/" className="w-full" />
        </div>
      </div>
      <CollapsibleTraining />
      <CollapsibleVideo />
      <CollapsibleTestimonial />
    </main>
  );
}
