"use client";
import React, { useContext } from "react";
import { MdOutlineCalendarToday } from "react-icons/md";
import { IFitness } from "@/type/fitness.type";
import { WorkoutsContext } from "@/context/WorkoutsContext";
import { toast } from "react-toastify";

interface AddBtnProps {
  workout: IFitness;
}

const AddBtn = ({ workout }: AddBtnProps) => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("AddBtn must be used inside WorkoutsProvider");
  }

  const { addToPlan, setAddToPlan } = context;

  const isPlanFull = addToPlan.length >= 5;

  const handleAddToPlan = () => {
    const alreadyInTodayPlan = addToPlan.some((item) => item.id === workout.id);

    if (alreadyInTodayPlan) {
      toast.info(`${workout.name} is already in Today's Plan.`);
      return;
    }

    // Plan has reached the limit
    if (isPlanFull) {
      toast.info("Today's Plan can contain a maximum of 5 lifts.");
      return;
    }

    setAddToPlan((prevTodayPlan) => [...prevTodayPlan, workout]);

    toast.success(`${workout.name} is added in Today's Plan.`);
  };

  return (
    <button
      onClick={() => handleAddToPlan()}
      disabled={isPlanFull}
      className={`flex items-center gap-1.5 rounded-full px-3 py-2 text-[11px] font-bold transition sm:gap-2 sm:px-5 sm:py-2.5 sm:text-sm ${
        isPlanFull
          ? "cursor-not-allowed bg-[#25282e] text-[#777b83]"
          : "bg-[#aaff00] text-[#0b0d08] hover:brightness-95 active:scale-95"
      }`}
    >
      <MdOutlineCalendarToday size={16} className="sm:size-4.5" />
      {isPlanFull ? "Today's plan is full" : "Add to today's plan"}
    </button>
  );
};

export default AddBtn;
