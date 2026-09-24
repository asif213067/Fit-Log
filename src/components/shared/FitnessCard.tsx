import React from "react";
import Image from "next/image";
import { IFitness } from "@/type/fitness.type";
import { MdLocalFireDepartment, MdOutlineWatchLater } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

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
            <MdOutlineWatchLater size={16} />

            <span>{duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            <MdLocalFireDepartment size={17} />

            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
            <FaRegStar size={15} />

            <span>{rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default FitnessCard;
