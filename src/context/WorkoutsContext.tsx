'use client'
import { IFitness } from '@/type/fitness.type';
import { WorkoutsContextType } from '@/type/WorkoutsContext.type';
import React, { ReactNode, useState, createContext } from 'react'

export const WorkoutsContext = createContext<WorkoutsContextType | null>(null);

const WorkoutsProvider = ({children}: {children: ReactNode}) => {

    const [addToPlan, setAddToPlan] = useState<IFitness[]>([]);
    const [saved, setSaved] = useState<IFitness[]>([]);

    const shareData: WorkoutsContextType = {
        addToPlan,
        setAddToPlan,
        saved,
        setSaved,
    }

  return (
    <WorkoutsContext.Provider value={shareData}>{children}</WorkoutsContext.Provider>
  )
}

export default WorkoutsProvider