import { Dispatch, SetStateAction } from "react";
import { IFitness } from "./fitness.type";

export type SortOption = "duration" | "calories" | "rating";

export interface WorkoutsContextType {
  addToPlan: IFitness[];
  setAddToPlan: Dispatch<SetStateAction<IFitness[]>>;

  saved: IFitness[];
  setSaved: Dispatch<SetStateAction<IFitness[]>>;

  sortBy: SortOption;
  setSortBy: Dispatch<SetStateAction<SortOption>>;

  sortedTodayPlan: IFitness[];
  sortedSaved: IFitness[];
}