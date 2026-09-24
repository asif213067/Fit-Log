"use client";

import React from "react";
import Link from "next/link";

const SavedBtn = () => {
  return (
    <Link
      href="/my-plan"
      className="flex h-8.5 items-center gap-1 rounded-md px-2 text-[11px] font-medium text-[#777b83] transition-colors hover:bg-[#15180f] hover:text-white"
    >
      <span>Saved</span>

      <span className="flex h-4 min-w-4 items-center justify-center rounded-full border border-[#30333a] text-[9px] text-[#858991]">
        (0)
      </span>
    </Link>
  );
};

export default SavedBtn;