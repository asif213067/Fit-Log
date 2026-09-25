import React from "react";
import Link from "next/link";

const SavedEmptyCard = () => {
  return (
    <div className="flex min-h-48 flex-col items-center justify-center text-center">
      <h3 className="text-sm font-bold uppercase tracking-wide text-white">
        No Saved Workouts
      </h3>

      <p className="mt-1 text-xs text-[#777b83]">
        Save workouts from the library to find them here later.
      </p>

      <Link
        href="/"
        className="mt-4 rounded-full bg-[#aaff00] px-5 py-2 text-xs font-bold text-[#0b0d08] transition-transform hover:scale-105 active:scale-95"
      >
        Go to workouts
      </Link>
    </div>
  );
};

export default SavedEmptyCard;