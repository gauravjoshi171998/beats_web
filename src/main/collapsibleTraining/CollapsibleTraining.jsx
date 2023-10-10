import React from "react";
import TrainerCard from "@/component/trainerCard/TrainerCard";
import Note from "../../assest/Image/textNote.svg";

const CollapsibleTraining = () => {
  return (
    <div className=" flex justify-center align-center">
    <div className="max-w-[1320px] mx-auto lg:py-20 grid gap-16 lg:grid-cols-3 md:grid-cols-2">
        <TrainerCard Note={Note} head="progression" />
        <TrainerCard Note={Note} head="progression" />
        <TrainerCard Note={Note} head="workout" />
      </div>
    </div>
  );
};

export default CollapsibleTraining;
