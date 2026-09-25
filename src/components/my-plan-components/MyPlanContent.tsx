"use client";

import React, { useEffect, useMemo, useState } from "react";
import { IFitness } from "@/type/fitness.type";
import FitnessCard from "@/components/shared/FitnessCard";
import PlanTabs from "./PlanTabs";
import SortDropdown from "./SortDropDown";
import WorkoutsCard from "./WorkoutsCard";


interface MyPlanContentProps {
  workouts: IFitness[];
}

const MyPlanContent = ({ workouts }: MyPlanContentProps) => {
  const [todayPlan, setTodayPlan] = useState<IFitness[]>([]);
  const [activeTab, setActiveTab] = useState("Today's Plan");
  const [sortBy, setSortBy] = useState("Duration");

  useEffect(() => {
    const savedPlan = JSON.parse(
      localStorage.getItem("todayPlan") || "[]"
    );

    setTodayPlan(savedPlan);
  }, []);

  const totalCalories = useMemo(() => {
    return todayPlan.reduce(
      (total, workout) => total + workout.caloriesBurned,
      0
    );
  }, [todayPlan]);

  const totalMinutes = useMemo(() => {
    return todayPlan.reduce(
      (total, workout) => total + workout.duration,
      0
    );
  }, [todayPlan]);

  const totalDuration = todayPlan.length;

  const sortedWorkouts = [...todayPlan].sort((a, b) => {
    if (sortBy === "Duration") {
      return a.duration - b.duration;
    }

    if (sortBy === "Calories") {
      return a.caloriesBurned - b.caloriesBurned;
    }

    if (sortBy === "Rating") {
      return b.rating - a.rating;
    }

    return 0;
  });

  return (
    <section className="mt-8">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-xl border border-[#25282e] bg-[#111317] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[#777b83]">
            Exercises
          </p>

          <p className="mt-1 text-2xl font-bold text-[#aaff00]">
            {totalDuration}
          </p>
        </div>

        <div className="rounded-xl border border-[#25282e] bg-[#111317] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[#777b83]">
            Calories
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {totalCalories}
          </p>
        </div>

        <div className="rounded-xl border border-[#25282e] bg-[#111317] p-4">
          <p className="text-[10px] uppercase tracking-wider text-[#777b83]">
            Minutes
          </p>

          <p className="mt-1 text-2xl font-bold text-white">
            {totalMinutes}
          </p>
        </div>

      </div>

      {/* Tabs + Sort */}
      <div className="mt-8 flex items-center justify-between gap-4 border-b border-[#25282e] pb-4">
        <PlanTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      {/* Today's Plan */}
      {activeTab === "Today's Plan" && (
        <>
          {sortedWorkouts.length > 0 ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-1 lg:grid-rows-1">
              {sortedWorkouts.map((workout) => (
                <WorkoutsCard
                  key={workout.id}
                  workout={workout}
                />
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-2xl border border-[#25282e] bg-[#111317] px-6 py-16 text-center">
              <h2 className="text-xl font-bold uppercase text-white">
                No Workouts Yet
              </h2>

              <p className="mt-2 text-sm text-[#777b83]">
                Add workouts to today&apos;s plan and they will appear here.
              </p>

              <a
                href="#library"
                className="mt-6 inline-block rounded-full bg-[#aaff00] px-5 py-2.5 text-xs font-bold uppercase text-[#0b0d08]"
              >
                Browse Workouts
              </a>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default MyPlanContent;