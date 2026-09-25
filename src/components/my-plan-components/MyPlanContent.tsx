"use client";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import React, { useContext, useState } from "react";
import { IFitness } from "@/type/fitness.type";
import TodayPlanCard from "./TodayPlanCard";
import TodayEmptyCard from "./TodayEmptyCard";
import SavedCard from "./SavedCard";
import SavedEmptyCard from "./SavedEmptyCard";

type sortOptions = "duration" | "calories" | "rating";

const MyPlanContent = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("AddBtn and SaveBtn must be used inside WorkoutsProvider");
  }

  const { addToPlan, saved } = context;

  const [sortBy, setSortBy] = useState<sortOptions>("duration");

  const sortBooks = (workouts: IFitness[]) => {
    const sortedWorkouts = [...workouts];

    switch (sortBy) {
      case "duration":
        return sortedWorkouts.sort((a, b) => b.duration - a.duration);

      case "calories":
        return sortedWorkouts.sort((a, b) => b.caloriesBurned - a.caloriesBurned);

      case "rating":
        return sortedWorkouts.sort(
          (a, b) => b.rating - a.rating,
        );

    }
  };

  const sortedTodayPlan = sortBooks(addToPlan);
  const sortedSaved = sortBooks(saved);

  return <section className="mt-8">
    {/* Sort By */}
        <div className="mb-7 flex flex-row items-center justify-center gap-2">
          <label
            htmlFor="book-sort"
            className="text-sm font-semibold text-base-content/70"
          >
            Sort By
          </label>

          <select
            id="book-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as sortOptions)}
            className="select select-success w-full max-w-xs rounded-xl border-base-300 bg-base-100 font-medium shadow-sm"
          >
            <option value="pages">Duration</option>
            <option value="year">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>

        {/* Tabs */}
        <div className="rounded-2xl border border-base-300 bg-base-100 p-3 shadow-sm sm:p-5">
          <div className="tabs tabs-border w-full">
            {/* Tody's Plan */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-sm font-semibold [--tab-border-color:white] checked:[--tab-border-color:var(--color-emerald-700)]"
              aria-label={`Today's Plan (${addToPlan.length})`}
            />

            <div className="tab-content border-base-300 bg-base-100 pt-6">
              {sortedTodayPlan.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {sortedTodayPlan.map((workout: IFitness) => (
                    <TodayPlanCard key={workout.id} workout={workout} />
                  ))}
                </div>
              ) : (
                  <TodayEmptyCard />
              )}
            </div>

            {/* Wishlist Books */}
            <input
              type="radio"
              name="my_tabs_2"
              className="tab text-sm font-semibold [--tab-border-color:white] checked:[--tab-border-color:var(--color-emerald-700)]"
              aria-label={`Wishlist (${saved.length})`}
              defaultChecked
            />

            <div className="tab-content border-base-300 bg-base-100 pt-6">
              {sortedSaved.length > 0 ? (
                <div className="flex flex-col gap-4">
                  {sortedSaved.map((workout: IFitness) => (
                    <SavedCard key={workout.id} workout={workout} />
                  ))}
                </div>
              ) : (
                <SavedEmptyCard />
              )}
            </div>
          </div>
        </div>
  </section>;
};

export default MyPlanContent;
