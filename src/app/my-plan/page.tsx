import React from "react";;
import MyPlanContent from "@/components/my-plan-components/MyPlanContent";

const MyPlanPage = async () => {
  


  return (
    <main className="container mx-auto px-4 py-8 lg:px-8">
      <h1 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
        My Plan
      </h1>

      <p className="mt-2 text-sm text-[#7d828b]">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <MyPlanContent />
    </main>
  );
};

export default MyPlanPage;