import React from "react";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const SaveBtn = () => {
  return (
    <button className="flex items-center gap-2 rounded-full border border-[#3a3e46] px-5 py-2.5 text-sm font-bold text-white transition hover:border-[#aaff00]/60 active:scale-95">
      <MdOutlineBookmarkBorder size={18} />
      Save for later
    </button>
  );
};

export default SaveBtn;
