"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import { FiClock, FiX } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdLocalFireDepartment } from "react-icons/md";
import { toast } from "react-toastify";

import { IFitness } from "@/type/fitness.type";
import { WorkoutsContext } from "@/context/WorkoutsContext";

interface SavedCardProps {
  workout: IFitness;
}

const SavedCard = ({ workout }: SavedCardProps) => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("SavedCard must be used inside WorkoutsProvider");
  }

  const { setSaved } = context;

  const {
    id,
    image,
    name,
    muscleGroups,
    duration,
    caloriesBurned,
    rating,
  } = workout;

  const handleRemove = () => {
    setSaved((prevSaved) =>
      prevSaved.filter((item) => item.id !== id)
    );

    toast.success(`${name} removed from Saved.`);
  };

  return (
    <article className="flex items-center gap-3 rounded-xl border border-[#1b1e23] bg-[#111317] p-2.5 transition-colors hover:border-[#2a2e35] sm:gap-4 sm:p-3">

      {/* Image */}
      <div className="relative h-14 w-24 shrink-0 overflow-hidden rounded-lg sm:h-14 sm:w-28">
        <Image
          src={image}
          alt={name}
          width={112}
          height={56}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Workout Info */}
      <div className="min-w-0 flex-1">

        {/* Name */}
        <h3 className="truncate text-xs font-bold uppercase text-white sm:text-sm">
          {name}
        </h3>

        {/* Muscle Group */}
        <p className="mt-0.5 truncate text-[10px] text-[#777b83] sm:text-xs">
          {muscleGroups.join(" · ")}
        </p>

        {/* Stats */}
        <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[10px] sm:gap-3 sm:text-xs">

          {/* Duration */}
          <span className="flex items-center gap-1 text-[#d4d7dc]">
            <FiClock
              className="text-[#aaff00]"
              size={11}
            />
            {duration} min
          </span>

          {/* Calories */}
          <span className="flex items-center gap-1 text-[#d4d7dc]">
            <MdLocalFireDepartment
              className="text-[#aaff00]"
              size={13}
            />
            {caloriesBurned} kcal
          </span>

          {/* Rating */}
          <span className="flex items-center gap-1 text-[#d4d7dc]">
            <FaStar
              className="text-[#aaff00]"
              size={10}
            />
            {rating}
          </span>

        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">

        {/* View Details */}
        <Link
          href={`/workouts/${id}`}
          className="rounded-full border border-[#30353d] px-3.5 py-1.5 text-[10px] font-medium text-[#d4d7dc] transition-colors hover:border-[#555b65] hover:text-white"
        >
          View Details
        </Link>

        {/* Remove */}
        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${name} from saved`}
          className="rounded-full p-1.5 text-[#777b83] transition-colors hover:bg-[#1b1e23] hover:text-white"
        >
          <FiX size={15} />
        </button>

      </div>
    </article>
  );
};

export default SavedCard;