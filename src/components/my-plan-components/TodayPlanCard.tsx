import { IFitness } from '@/type/fitness.type'
import React from 'react'

interface TodayPlanCardProps {
  workout: IFitness;
}

const TodayPlanCard = ({workout}: TodayPlanCardProps) => {
  return (
    <div>TodayPlanCard: {workout.name}</div>
  )
}

export default TodayPlanCard