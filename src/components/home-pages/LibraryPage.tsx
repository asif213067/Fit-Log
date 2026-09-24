import React from 'react'
import FitnessCard from '../shared/FitnessCard'
import { error } from 'console';
import { IFitness } from '@/type/fitness.type';

const getWorkoutsData = async () => {
  const res = await fetch('https://api.abcz.workers.dev/api/fitlog');
  
  if(!res.ok) {
    throw error ("Fiald to fetch data");
  }

  return res.json();
}

const LibraryPage = async () => {
  const workouts = await getWorkoutsData();

  return (
    <section id="library" className="container mx-auto my-8 px-4 lg:px-8">
      <div className="px-4 py-4 rounded-xl bg-[#0b0d10]">
        <div className="mb-8">
          <h2 className= "text-xl font-bold uppercase tracking-wide text-white sm:text-xl">
            The Library
          </h2>
          <p className="mt-2 text-sm text-[#7d828b]">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout: IFitness) => (
            <FitnessCard key={workout.id} fitData={workout} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LibraryPage;