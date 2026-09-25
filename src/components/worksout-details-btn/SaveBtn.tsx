"use client";

import React, { useContext } from "react";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { IFitness } from "@/type/fitness.type";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";

interface SaveBtnProps {
  workout: IFitness;
}

const SaveBtn = ({ workout }: SaveBtnProps) => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("SaveBtn must be used inside WorkoutsProvider");
  }

  const { saved, setSaved } = context;

  const handleSaveBtn = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      toast.info(`${workout.name} is already in Saved.`);
      return;
    }

    setSaved((prevSaved) => [...prevSaved, workout]);

    toast.success(`${workout.name} is added in Saved.`);
  };

  return (
    <button
      onClick={() => handleSaveBtn()}
      className="flex items-center gap-2 rounded-full border border-[#3a3e46] px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#aaff00]/60 active:scale-95"
    >
      <MdOutlineBookmarkBorder size={18} />
      Save for later
    </button>
  );
};

export default SaveBtn;
