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
      className="flex w-full items-center justify-center gap-1.5 rounded-full border border-[#3a3e46] px-3 py-2 text-[11px] font-bold text-white transition hover:border-[#aaff00]/60 active:scale-95 sm:w-auto sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm"
    >
      <MdOutlineBookmarkBorder size={16} className="sm:size-4.5" />
      Save for later
    </button>
  );
};

export default SaveBtn;
