"use client";

import React from "react";
import { IFitness } from "@/type/fitness.type";

interface PlanStatsProps {
  workouts: IFitness[];
}

const PlanStats = ({ workouts }: PlanStatsProps) => {
  const exerciseCount = workouts.length;

  const totalDuration = workouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = workouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-[#25282e] bg-[#111317]">

      {/* Exercises */}
      <div className="border-r border-[#25282e] p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-wide text-[#777b83] sm:text-xs">
          Exercises
        </p>

        <p className="mt-1 text-2xl font-bold text-[#aaff00] sm:text-3xl">
          {exerciseCount}
        </p>
      </div>

      {/* Minutes */}
      <div className="border-r border-[#25282e] p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-wide text-[#777b83] sm:text-xs">
          Minutes
        </p>

        <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          {totalDuration}
        </p>
      </div>

      {/* Calories */}
      <div className="p-4 sm:p-5">
        <p className="text-[10px] uppercase tracking-wide text-[#777b83] sm:text-xs">
          Calories
        </p>

        <p className="mt-1 text-2xl font-bold text-white sm:text-3xl">
          {totalCalories}
        </p>
      </div>

    </div>
  );
};

export default PlanStats;