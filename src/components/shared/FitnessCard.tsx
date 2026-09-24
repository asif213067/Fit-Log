import React from "react";
import Image from "next/image";
import { IFitness } from "@/type/fitness.type";

interface FitnessCardProps {
  fitData: IFitness;
}

const FitnessCard = ({ fitData }: FitnessCardProps) => {
  const {
    image,
    name,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
    difficulty,
  } = fitData;
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#25282e] bg-[#15171c]">
      {/* Image */}
      <div className="relative h-44 w-full overflow-hidden bg-[#1c1f25]">
        {image ? (
          <>
            <Image
              src={image}
              alt={name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-[center_30%] transition duration-500 group-hover:brightness-110"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-[#14161b] to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-black/50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-white backdrop-blur-md">
              {difficulty}
            </span>
          </>
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-[#7d828b]">
            No image available
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Muscle Groups */}
        <div className="flex flex-wrap gap-2">
          {muscleGroups?.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-[#aaff00] px-3 py-1 text-[9px] font-bold uppercase tracking-wide text-[#0b0d08]"
            >
              {muscle}
            </span>
          ))}
        </div>

        {/* Workout Name */}
        <h3 className="mt-4 text-lg font-black uppercase leading-tight tracking-wide text-[#f5f5f5]">
          {name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-[#858991]">{equipment}</p>

        {/* Divider */}
        <div className="my-4 border-t border-[#292c32]" />

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-[#8d9199]">
          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <circle cx="12" cy="12" r="9" />
              <path strokeLinecap="round" d="M12 7v5l3 2" />
            </svg>

            <span>{duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path d="M13.5 2.5c.4 3.2-1.1 4.7-2.5 6.1-1.1 1.1-2 2-2 3.7 0 1.3.7 2.4 1.8 3.1-.1-.5 0-1.1.4-1.7.4-.7 1-1.2 1.6-1.7.3 1.5 1.7 2.3 2.3 3.6.3.6.4 1.2.3 1.8 1.1-.7 1.9-2 1.9-3.5 0-2.2-1.3-4.3-2.7-5.8-.2 1-.7 1.7-1.3 2.2.2-2.7-.6-5.3-1.8-7.8Z" />
            </svg>

            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9L12 3Z"
              />
            </svg>

            <span>{rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FitnessCard;
