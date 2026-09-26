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
      prevSaved.filter((item) => item.id !== id),
    );

    toast.warning(`${name} removed from Saved.`);
  };

  return (
    <article className="rounded-xl border border-[#1b1e23] bg-[#111317] p-2.5 transition-colors hover:border-[#2a2e35] sm:flex sm:items-center sm:gap-4 sm:p-3">
      {/* ================= MOBILE ONLY ================= */}
      <div className="sm:hidden">
        {/* Top: Image + Details */}
        <div className="flex items-center gap-8">
          {/* Image */}
          <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={name}
              width={150}
              height={100}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Details */}
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-xs font-bold uppercase text-white">
              {name}
            </h3>

            <p className="mt-0.5 truncate text-[10px] text-[#777b83]">
              {muscleGroups.join(" · ")}
            </p>

            <div className="mt-1.5 flex items-center gap-2.5 text-[10px]">
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
        </div>

        {/* Bottom: 2 Buttons */}
        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-[#1b1e23] pt-3">
          {/* View Details */}
          <Link
            href={`/workouts/${id}`}
            className="flex items-center justify-center rounded-full border border-[#30353d] px-2 py-2 text-[9px] font-medium text-[#d4d7dc] transition-colors hover:border-[#555b65] hover:text-white"
          >
            View Details
          </Link>

          {/* Remove */}
          <button
            type="button"
            onClick={handleRemove}
            aria-label={`Remove ${name} from Saved`}
            className="flex items-center justify-center gap-1 rounded-full border border-[#30353d] px-2 py-2 text-[9px] font-medium text-[#d4d7dc] transition-colors hover:border-[#555b65] hover:text-white"
          >
            <FiX size={13} />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP / TABLET ================= */}
      <div className="hidden flex-1 sm:flex sm:items-center sm:gap-4">
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
          <h3 className="truncate text-xs font-bold uppercase text-white sm:text-sm">
            {name}
          </h3>

          <p className="mt-0.5 truncate text-[10px] text-[#777b83] sm:text-xs">
            {muscleGroups.join(" · ")}
          </p>

          <div className="mt-1.5 flex flex-wrap items-center gap-2.5 text-[10px] sm:gap-3 sm:text-xs">
            <span className="flex items-center gap-1 text-[#d4d7dc]">
              <FiClock
                className="text-[#aaff00]"
                size={11}
              />
              {duration} min
            </span>

            <span className="flex items-center gap-1 text-[#d4d7dc]">
              <MdLocalFireDepartment
                className="text-[#aaff00]"
                size={13}
              />
              {caloriesBurned} kcal
            </span>

            <span className="flex items-center gap-1 text-[#d4d7dc]">
              <FaStar
                className="text-[#aaff00]"
                size={10}
              />
              {rating}
            </span>
          </div>
        </div>

        {/* Desktop Actions */}
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
      </div>
    </article>
  );
};

export default SavedCard;