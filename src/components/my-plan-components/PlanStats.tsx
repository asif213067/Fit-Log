"use client";

import React, { useContext } from "react";
import { WorkoutsContext } from "@/context/WorkoutsContext";


const PlanStats = () => {
  const context = useContext(WorkoutsContext);
  
    if (!context) {
      throw new Error("AddBtn and SaveBtn must be used inside WorkoutsProvider");
    }
  
    const {addToPlan, setAddToPlan, saved, setSaved} = context;

  return (
    <div className="mt-6 grid grid-cols-3 gap-3">
      <div className="rounded-xl border border-[#25282e] bg-[#111317] p-4">
        <p className="text-xs uppercase tracking-wide text-[#7d828b]">
          Exercise
        </p>

        <p className="mt-2 text-2xl font-bold text-white">
          {exerciseCount}
        </p>
      </div>

      <div className="rounded-xl border border-[#25282e] bg-[#111317] p-4">
        <p className="text-xs uppercase tracking-wide text-[#7d828b]">
          Duration
        </p>

        <p className="mt-2 text-2xl font-bold text-white">
          {totalDuration}
          <span className="ml-1 text-sm font-normal text-[#7d828b]">
            min
          </span>
        </p>
      </div>

      <div className="rounded-xl border border-[#25282e] bg-[#111317] p-4">
        <p className="text-xs uppercase tracking-wide text-[#7d828b]">
          Calories
        </p>

        <p className="mt-2 text-2xl font-bold text-white">
          {totalCalories}
          <span className="ml-1 text-sm font-normal text-[#7d828b]">
            kcal
          </span>
        </p>
      </div>
    </div>
  );
};

export default PlanStats;