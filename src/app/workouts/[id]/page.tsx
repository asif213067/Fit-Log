import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { IFitness } from "@/type/fitness.type";
import SaveBtn from "@/components/worksout-details-btn/SaveBtn";
import AddBtn from "@/components/worksout-details-btn/AddBtn";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({ params }: WorkoutDetailsPageProps) => {
  const { id } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);

  if (!res.ok) {
    notFound();
  }

  const workout: IFitness = await res.json();

  // const res = await fetch(
  //   "https://api.abcz.workers.dev/api/fitlog"
  // );

  // if (!res.ok) {
  //   throw new Error("Failed to fetch workouts data!");
  // }

  // const workouts: IFitness[] = await res.json();

  // const workout = workouts.find(
  //   (item) => item.id === Number(id)
  // );

  // if (!workout) {
  //   notFound();
  // }

  const {
    image,
    name,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = workout;

  return (
    <main className="container mx-auto px-4 py-8 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        {/* Left: Image */}
        <div className="relative h-80 overflow-hidden rounded-2xl border border-[#25282e] sm:h-105 lg:h-140">
          <Image
            src={image}
            alt={name}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[center_30%]"
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-3xl font-black uppercase leading-tight text-[#f5f5f5] sm:text-4xl">
            {name}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-[#8d9199]">
            {description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#aaff00] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0b0d08]"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-7 divide-y divide-[#25282e] rounded-xl border border-[#25282e] bg-[#111317]">
            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Equipment
              </span>
              <span className="font-bold text-white">{equipment}</span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Difficulty
              </span>
              <span className="font-bold text-white">{difficulty}</span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Sets
              </span>
              <span className="font-bold text-white">{sets}</span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Reps
              </span>
              <span className="font-bold text-white">{reps}</span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Duration
              </span>
              <span className="font-bold text-white">{duration} min</span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Calories
              </span>
              <span className="font-bold text-white">
                {caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-4 py-3 text-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#777b83]">
                Rating
              </span>
              <span className="font-bold text-white">{rating}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#f5f5f5]">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-sm leading-6 text-[#8d9199]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1e2712] text-[12px] font-bold text-[#aaff00]">
                    {index + 1}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            {/* Add to today's plan Button */}
            <div className="mt-6">
              <AddBtn workout={workout} />
            </div>

            {/* Save for letter Button */}
            <div className="mt-6">
              <SaveBtn workout={workout} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkoutDetailsPage;
