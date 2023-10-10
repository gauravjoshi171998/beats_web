import React from "react";
import SimpleCard from "@/component/card/Card";
const CollapsibleCard = () => {
  return (
    <div className=" flex justify-center align-center py-10">
    <div className="max-w-[1320px] mx-auto lg:py-20 grid gap-16 lg:grid-cols-3 md:grid-cols-2">
      <SimpleCard />
      <SimpleCard />
      <SimpleCard />
    </div>
    </div>
  );
};

export default CollapsibleCard;
