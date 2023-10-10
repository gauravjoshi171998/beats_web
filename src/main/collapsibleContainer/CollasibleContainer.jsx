import React from "react";
import SimpleGymCard from "@/component/gymCard/GymCard";
import GYM from "../../assest/Image/gymImg8.svg";
import GYM1 from "../../assest/Image/gymImg9.svg";
import GYM2 from "../../assest/Image/gymImg10.svg";

const CollasibleContainer = () => {
  return (
    <div className="container mx-auto py-10 bg-[#171a26]">
      <div className="container font-500 md:text-2xl text-1xl text-[#fff] text-center grid place-items-center">
        Lets Dive In Into. The Service List
        <br />
        <button className="bg-[#fff] text-[#171a26] font-bold  text-sm py-3 px-8 rounded-3xl m-4 hover:scale-105 ease-in duration-300 hover:bg-[#5a55a4] hover:text-[#fff]">
          LEARN MORE
        </button>
      </div>
      <div className="container mx-auto flex justify-center align-center py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <SimpleGymCard img={GYM} />
          <SimpleGymCard img={GYM1} />
          <SimpleGymCard img={GYM2} />
        </div>
      </div>
    </div>
  );
};

export default CollasibleContainer;
