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

  const handleAddToPlan = () => {
    const alreadyInTodayPlan = addToPlan.some((item) => item.id === workout.id);

    if (alreadyInTodayPlan) {
      toast.info(`${workout.name} is already in Today's Plan.`);
      return;
    }

    setAddToPlan((prevTodayPlan) => [...prevTodayPlan, workout]);

    toast.success(`${workout.name} is added in Today's Plan.`);
  };

  return (
    <button
      onClick={() => handleAddToPlan()}
      className="flex items-center gap-2 rounded-full bg-[#aaff00] px-5 py-2.5 text-sm font-bold text-[#0b0d08] transition hover:brightness-95 active:scale-95"
    >
      <MdOutlineCalendarToday size={18} />
      Add to today&apos;s plan
    </button>
  );
};

export default AddBtn;
