import { Dispatch, SetStateAction } from "react";
import { IFitness } from "./fitness.type";


export interface WorkoutsContextType {
    addToPlan: IFitness[];
    setAddToPlan: Dispatch<SetStateAction<IFitness[]>>;
    saved: IFitness[];
    setSaved: Dispatch<SetStateAction<IFitness[]>>;
}