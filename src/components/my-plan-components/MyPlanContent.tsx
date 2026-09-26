"use client";

import React, { useContext, useState } from "react";

import { WorkoutsContext } from "@/context/WorkoutsContext";
import { IFitness } from "@/type/fitness.type";
import { SortOption } from "@/type/WorkoutsContext.type";

import PlanStats from "./PlanStats";
import TodayPlanCard from "./TodayPlanCard";
import TodayEmptyCard from "./TodayEmptyCard";
import SavedCard from "./SavedCard";
import SavedEmptyCard from "./SavedEmptyCard";

type ActiveTab = "today" | "saved";

const MyPlanContent = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("Component must be used inside WorkoutsProvider");
  }

  const {
    sortedTodayPlan,
    sortedSaved,
    sortBy,
    setSortBy,
  } = context;

  const [activeTab, setActiveTab] = useState<ActiveTab>("today");

  const activeWorkouts =
    activeTab === "today" ? sortedTodayPlan : sortedSaved;

  return (
    <section className="mt-8">

      {/* Stats */}
      <PlanStats workouts={activeWorkouts} />

      {/* Tabs + Sort */}
      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Tabs */}
        <div className="flex w-fit rounded-lg border border-[#25282e] bg-[#111317] p-1 ">

          <button
            type="button"
            onClick={() => setActiveTab("today")}
            className={`rounded-md px-4 py-2 text-xs font-bold transition-colors ${
              activeTab === "today"
                ? "bg-[#1d2229] text-[#aaff00]"
                : "text-[#777b83] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("saved")}
            className={`rounded-md px-4 py-2 text-xs font-bold transition-colors ${
              activeTab === "saved"
                ? "bg-[#1d2229] text-[#aaff00]"
                : "text-[#777b83] hover:text-white"
            }`}
          >
            Saved
          </button>

        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="workout-sort"
            className="text-xs text-[#777b83]"
          >
            Sort By
          </label>

          <select
            id="workout-sort"
            value={sortBy}
            onChange={(e) =>
              setSortBy(e.target.value as SortOption)
            }
            className="h-8 rounded-lg border border-[#25282e] bg-[#111317] px-3 text-xs font-medium text-white outline-none focus:border-[#aaff00]"
          >
            <option value="duration">Duration</option>
            <option value="calories">Calories</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {/* Workout Content */}
      <div className="mt-4 rounded-xl border border-dashed border-[#25282e] bg-[#0d0f12] p-4 sm:p-5">

        {/* Today's Plan */}
        {activeTab === "today" && (
          <>
            {sortedTodayPlan.length > 0 ? (
              <div className="flex flex-col gap-4">
                {sortedTodayPlan.map((workout: IFitness) => (
                  <TodayPlanCard
                    key={workout.id}
                    workout={workout}
                  />
                ))}
              </div>
            ) : (
              <TodayEmptyCard />
            )}
          </>
        )}

        {/* Saved */}
        {activeTab === "saved" && (
          <>
            {sortedSaved.length > 0 ? (
              <div className="flex flex-col gap-4">
                {sortedSaved.map((workout: IFitness) => (
                  <SavedCard
                    key={workout.id}
                    workout={workout}
                  />
                ))}
              </div>
            ) : (
              <SavedEmptyCard />
            )}
          </>
        )}

      </div>
    </section>
  );
};

export default MyPlanContent;