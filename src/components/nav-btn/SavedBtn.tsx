"use client";

import React, { useContext } from "react";
import Link from "next/link";

import { WorkoutsContext } from "@/context/WorkoutsContext";

const SavedBtn = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("SavedBtn must be used inside WorkoutsProvider");
  }

  const { saved } = context;

  return (
    <Link
      href="/my-plan"
      className="flex h-8.5 items-center gap-1 rounded-md px-2 text-[14px] font-medium text-[#777b83] transition-colors hover:bg-[#15180f] hover:text-white"
    >
      <span>Saved</span>

      <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#30333a] text-[12px] text-[#858991]">
        {saved.length}
      </span>
    </Link>
  );
};

export default SavedBtn;