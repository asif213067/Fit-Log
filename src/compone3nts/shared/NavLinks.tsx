"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ mobile = false }) => {
  const pathname = usePathname();

  const isWorkoutsActive = pathname === "/";
  const isMyPlanActive = pathname === "/my-plan";

  return (
    <ul
      className={
        mobile
          ? "menu menu-sm dropdown-content z-10 mt-3 w-52 rounded-lg border border-[#1b1d21] bg-[#0d0f12] p-2 shadow-xl"
          : "menu menu-horizontal items-center gap-1 px-1"
      }
    >
      <li>
        <Link
          href="/"
          className={
            mobile
              ? isWorkoutsActive
                ? "bg-[#172209] text-[#aaff00]"
                : "text-[#777b83] hover:bg-[#15180f] hover:text-[#aaff00]"
              : `min-h-0 h-8.5 rounded-full px-5 text-[12px] font-semibold transition-colors ${
                  isWorkoutsActive
                    ? "bg-[#172209] text-[#aaff00]"
                    : "bg-transparent text-[#777b83] hover:bg-transparent hover:text-[#aaff00]"
                }`
          }
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/my-plan"
          className={
            mobile
              ? isMyPlanActive
                ? "bg-[#172209] text-[#aaff00]"
                : "text-[#777b83] hover:bg-[#15180f] hover:text-[#aaff00]"
              : `min-h-0 h-8.5 rounded-full px-5 text-[12px] font-semibold transition-colors ${
                  isMyPlanActive
                    ? "bg-[#172209] text-[#aaff00]"
                    : "bg-transparent text-[#777b83] hover:bg-transparent hover:text-[#aaff00]"
                }`
          }
        >
          My Plan
        </Link>
      </li>
    </ul>
  );
};

export default NavLinks;