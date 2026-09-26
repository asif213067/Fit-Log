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
      className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
        isPlanFull
          ? "cursor-not-allowed bg-[#25282e] text-[#777b83]"
          : "bg-[#aaff00] text-[#0b0d08] hover:brightness-95 active:scale-95"
      }`}
    >
      <MdOutlineCalendarToday size={18} />
      {isPlanFull ? "Today's plan is full" : "Add to today's plan"}
    </button>
  );
};

export default AddBtn;
