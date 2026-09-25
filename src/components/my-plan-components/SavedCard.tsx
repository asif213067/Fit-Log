import { IFitness } from '@/type/fitness.type'
import React from 'react'

interface SavedCardProps {
  workout: IFitness;
}

const SavedCard = ({workout}: SavedCardProps) => {
  return (
    <div>SavedCard: {workout.name}</div>
  )
}

export default SavedCard