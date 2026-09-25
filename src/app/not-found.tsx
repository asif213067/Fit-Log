import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0d]">
      <div className="text-center">
        <h1 className="text-7xl font-black text-[#aaff00]">
          404
        </h1>

        <h2 className="mt-4 text-2xl font-bold text-[#f5f5f5]">
          Workout Not Found
        </h2>

        <p className="mt-2 text-sm text-[#777b83]">
          The workout you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block rounded-full bg-[#aaff00] px-5 py-2.5 text-sm font-bold text-[#0b0d08]"
        >
          Back to Workouts
        </Link>
      </div>
    </main>
  );
};

export default NotFound;