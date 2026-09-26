const Loading = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#090a0d]">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-12 w-12">
          <div className="absolute inset-0 rounded-full border-4 border-[#25282e]" />

          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-[#aaff00]" />
        </div>

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#f5f5f5]">
            FITLOG
          </p>

          <p className="mt-1 text-[10px] uppercase tracking-wider text-[#777b83]">
            Loading workouts...
          </p>
        </div>
      </div>
    </main>
  );
};

export default Loading;