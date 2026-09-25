"use client";

interface SortDropdownProps {
  sortBy: string;
  setSortBy: (value: string) => void;
}

const SortDropdown = ({ sortBy, setSortBy }: SortDropdownProps) => {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <span className="whitespace-nowrap text-xs font-semibold text-[#7d828b]">Sort By</span>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="select select-sm w-32 border border-[#aaff00] bg-[#111317] text-xs text-white outline-none hover:border-[#aaff00] focus:border-[#aaff00] focus:outline-none focus:ring-0"
      >
        <option value="Duration">Duration</option>
        <option value="Calories">Calories</option>
        <option value="Rating">Rating</option>
      </select>
    </div>
  );
};

export default SortDropdown;
