import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Calendar, MapPin, Star } from "lucide-react"
import type { Destination } from "@/types/destination"

export function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <Link
      href={`/destinations/${destination.id}`}
      className="block flex flex-col gap-[24px] overflow-hidden group min-w-0"
    >
      {/* Image box - fixed height allowed per rule 3 */}
      <div className="relative h-[400px] w-full overflow-hidden bg-gray-200 min-w-0">
        <Image
          src={destination.imageUrl}
          alt={destination.name}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 45vw"
        />
        {/* Rating badge - absolute allowed per rule 4 */}
        <div className="absolute top-[20px] right-[20px] flex items-center gap-[6px] px-[16px] py-[8px] bg-white/60 backdrop-blur-[4px] shadow-[0_4px_4px_rgba(0,0,0,0.25)]">
          <span className="text-[16px] font-medium text-[#121212] tracking-[0.5px]">
            {destination.rating}
          </span>
          <Star width={20} height={20} fill="#121212" />
        </div>
      </div>

      {/* Info block - no fixed height per rule 3 */}
      <div className="flex flex-col gap-[24px] min-w-0">
        {/* Top group */}
        <div className="flex flex-col gap-[12px] min-w-0">
          {/* Country row */}
          <div className="flex items-center gap-[8px] min-w-0">
            <MapPin width={20} height={20} className="text-[#6C696D]" />
            <span className="text-[16px] font-medium text-[#6C696D] tracking-[0.5px] min-w-0">
              {destination.country}
            </span>
          </div>

          {/* Name / Price row */}
          <div className="flex justify-between gap-[24px] min-w-0">
            <span className="text-[32px] font-medium leading-1 tracking-[-0.04em] text-[#0C0B0B] min-w-0">
              {destination.name}
            </span>
            <span className="text-[32px] font-medium leading-1 tracking-[-0.02em] text-[#0C0B0B] text-right min-w-0">
              ${destination.price}/Person
            </span>
          </div>

          {/* Duration row */}
          <div className="flex items-center gap-[8px] min-w-0">
            <Calendar width={20} height={20} className="text-[#6C696D]" />
            <span className="text-[16px] font-medium text-[#6C696D] tracking-[0.5px] min-w-0">
              {destination.duration}
            </span>
          </div>
        </div>

        {/* Bottom: Book Now link */}
        <div className="flex items-center gap-[12px] group-hover:underline transition-all duration-200 min-w-0">
          <span className="text-[16px] font-medium uppercase tracking-[0.5px] text-primary">
            BOOK NOW
          </span>
          <ArrowUpRight
            width={20}
            height={20}
            className="text-primary group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-transform duration-200"
          />
        </div>
      </div>
    </Link>
  )
}
