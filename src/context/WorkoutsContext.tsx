"use client";

import React, { createContext, ReactNode, useEffect, useState } from "react";

import { IFitness } from "@/type/fitness.type";
import { SortOption, WorkoutsContextType } from "@/type/WorkoutsContext.type";

export const WorkoutsContext = createContext<WorkoutsContextType | null>(null);

const WorkoutsProvider = ({ children }: { children: ReactNode }) => {
  const [addToPlan, setAddToPlan] = useState<IFitness[]>([]);
  const [saved, setSaved] = useState<IFitness[]>([]);

  const [sortBy, setSortBy] = useState<SortOption>("duration");

  // Check whether localStorage has been loaded
  const [isHydrated, setIsHydrated] = useState(false);

  // Load data from localStorage
  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setAddToPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    setIsHydrated(true);
  }, []);

  // Save today's plan
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("fitlog-plan", JSON.stringify(addToPlan));
  }, [addToPlan, isHydrated]);

  // Save saved workouts
  useEffect(() => {
    if (!isHydrated) return;

    localStorage.setItem("fitlog-saved", JSON.stringify(saved));
  }, [saved, isHydrated]);

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

  const sortedTodayPlan = sortWorkouts(addToPlan);

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
