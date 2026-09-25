"use client";

import React, { createContext, ReactNode, useState } from "react";

import { IFitness } from "@/type/fitness.type";
import { SortOption, WorkoutsContextType } from "@/type/WorkoutsContext.type";

export const WorkoutsContext = createContext<WorkoutsContextType | null>(null);

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlan, setAddToPlan] = useState<IFitness[]>([]);
  const [saved, setSaved] = useState<IFitness[]>([]);

  // Default sorting
  const [sortBy, setSortBy] = useState<SortOption>("duration");

  const sortWorkouts = (workouts: IFitness[]): IFitness[] => {
    const sortedWorkouts = [...workouts];

    switch (sortBy) {
      case "duration":
        return sortedWorkouts.sort((a, b) => a.duration - b.duration);

      case "calories":
        return sortedWorkouts.sort(
          (a, b) => a.caloriesBurned - b.caloriesBurned,
        );

      case "rating":
        return sortedWorkouts.sort((a, b) => b.rating - a.rating);

      default:
        return sortedWorkouts;
    }
  };

  const sortedTodayPlan = sortWorkouts(addToPlan)

  const sortedSaved = sortWorkouts(saved);

  const shareData: WorkoutsContextType = {
    addToPlan,
    setAddToPlan,

    saved,
    setSaved,

    sortBy,
    setSortBy,

    sortedTodayPlan,
    sortedSaved,
  };

  return (
    <WorkoutsContext.Provider value={shareData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutsProvider;
