"use client";

import React from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IFitness } from "@/type/fitness.type";

interface AddBtnProps {
  workout: IFitness;
}

const AddBtn = ({ workout }: AddBtnProps) => {
  const handleAddToPlan = () => {
    const existingPlan: IFitness[] = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    const alreadyAdded = existingPlan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return;
    }

    const updatedPlan = [...existingPlan, workout];

    localStorage.setItem("todayPlan", JSON.stringify(updatedPlan));
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="flex items-center gap-2 rounded-full bg-[#aaff00] px-5 py-2.5 text-sm font-bold text-[#0b0d08] transition hover:brightness-95 active:scale-95"
    >
      <MdOutlineCalendarToday size={18} />
      Add to today&apos;s plan
    </button>
  );
};

export default AddBtn;