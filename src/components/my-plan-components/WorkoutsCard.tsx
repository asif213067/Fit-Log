import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { FiClock } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { MdLocalFireDepartment, MdCheck, MdClose } from "react-icons/md";
import { IFitness } from "@/type/fitness.type";


const oswald = Oswald({ subsets: ["latin"], weight: ["600", "700"] });

interface WorkoutsCardProps {
  workout: IFitness;
  onMarkDone?: (id: number) => void;
  onRemove?: (id: number) => void;
}

const WorkoutsCard = ({ workout, onMarkDone, onRemove }: WorkoutsCardProps) => {
  const { id, image, name, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <div className="flex items-center gap-4 border-b border-[#1c1f25] py-4 last:border-b-0">
      {/* Thumbnail */}
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-[#1c1f25]">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            sizes="56px"
            className="object-cover object-[center_30%]"
          />
        )}
      </div>

      {/* Name + Equipment + Stats */}
      <div className="min-w-0 flex-1">
        <h3 className={`${oswald.className} truncate text-sm font-bold uppercase tracking-wide text-white`}>
          {name}
        </h3>
        <p className="mt-0.5 text-xs text-[#7d828b]">{equipment}</p>

        <div className="mt-1.5 flex items-center gap-3 text-xs text-[#8d9199]">
          <div className="flex items-center gap-1">
            <FiClock className="h-3.5 w-3.5 text-[#aaff00]" />
            <span>{duration} min</span>
          </div>
          <div className="flex items-center gap-1">
            <MdLocalFireDepartment className="h-3.5 w-3.5 text-orange-400" />
            <span>{caloriesBurned} kcal</span>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="h-3 w-3 text-[#aaff00]" />
            <span>{rating}</span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-3">
        <Link
          href={`/workouts/${id}`}
          className="rounded-full border border-[#3a3e46] px-4 py-2 text-xs font-bold text-white transition hover:border-[#aaff00]/60"
        >
          View Details
        </Link>

        <button
          onClick={() => onMarkDone?.(id)}
          className="flex items-center gap-1.5 rounded-full bg-[#aaff00] px-4 py-2 text-xs font-bold text-[#0b0d08] transition hover:brightness-95"
        >
          <MdCheck size={14} />
          Mark as Done
        </button>

        <button
          onClick={() => onRemove?.(id)}
          aria-label={`Remove ${name} from plan`}
          className="rounded-full p-1.5 text-[#7d828b] transition hover:text-white"
        >
          <MdClose size={18} />
        </button>
      </div>
    </div>
  );
};

export default WorkoutsCard;