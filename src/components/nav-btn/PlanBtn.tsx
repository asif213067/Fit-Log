"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { WorkoutsContext } from "@/context/WorkoutsContext";

const PlanBtn = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw new Error("PlanBtn must be used inside WorkoutsProvider");
  }

  const { addToPlan } = context;

  return (
    <Link
      href="/my-plan"
      className="flex h-8.5 items-center gap-1 rounded-md px-2 text-[14px] font-medium text-[#b8bbc1] transition-colors hover:bg-[#15180f] hover:text-white"
    >
      <span>Plan</span>

      <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#aaff00] px-1 text-[12px] font-bold text-[#10130a]">
        {addToPlan.length}
      </span>
    </Link>
  );
};

export default PlanBtn;