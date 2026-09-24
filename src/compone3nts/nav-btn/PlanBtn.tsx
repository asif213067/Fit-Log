"use client";

import React from "react";
import Link from "next/link";

const PlanBtn = () => {
  return (
    <Link
      href="/my-plan"
      className="flex h-8.5 items-center gap-1 rounded-md px-2 text-[11px] font-medium text-[#b8bbc1] transition-colors hover:bg-[#15180f] hover:text-white"
    >
      <span>Plan</span>

      <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[#aaff00] px-1 text-[9px] font-bold text-[#10130a]">
        (0)
      </span>
    </Link>
  );
};

export default PlanBtn;