"use client";

interface PlanTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
}

const PlanTabs = ({
  activeTab,
  setActiveTab,
}: PlanTabsProps) => {
  return (
    <div className="flex w-fit items-center rounded-full border border-[#25282e] bg-[#111317] p-1">
      <button
        onClick={() => setActiveTab("Today's Plan")}
        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
          activeTab === "Today's Plan"
            ? "bg-[#25282e] text-white"
            : "text-[#7d828b] hover:text-white"
        }`}
      >
        Today&apos;s Plan
      </button>

      <button
        onClick={() => setActiveTab("Saved")}
        className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
          activeTab === "Saved"
            ? "bg-[#25282e] text-white"
            : "text-[#7d828b] hover:text-white"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;