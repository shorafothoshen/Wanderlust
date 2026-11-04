import Image from "next/image"
import { Star } from "lucide-react"
import type { Testimonial } from "@/types/testimonial"

const GoogleGLogo = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="10" fill="#1976D2" />
    <path
      d="M12 2a10 10 0 017.07 7.07l-1.18 1.18A8 8 0 1012 2z"
      fill="#FF3D00"
    />
    <path
      d="M12 22a10 10 0 01-7.07-7.07l1.18-1.18A8 8 0 1012 22z"
      fill="#FFC107"
    />
    <path
      d="M2 12a10 10 0 017.07-7.07l1.18 1.18A8 8 0 102 12z"
      fill="#4CAF50"
    />
  </svg>
)

export function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial
}) {
  return (
    <div
      className="bg-white border border-[#EEEEEE] p-[24px] flex items-center gap-[48px] min-w-0"
    >
      {/* Left column */}
      <div className="w-[314px] flex flex-col justify-between min-w-0">
        {/* Top group */}
        <div className="flex flex-col gap-[8px] min-w-0">
          {/* Rating row */}
          <div className="flex items-center gap-[12px] min-w-0">
            <GoogleGLogo />
            <span className="text-[14px] font-semibold text-[#121212] tracking-[-0.4px] min-w-0">
              {testimonial.rating}/5
            </span>
            <div className="flex gap-0">
              {[1, 2, 3, 4, 5].map(() => (
                <Star width={16} height={16} fill="#B17D69" key="star" />
              ))}
            </div>
          </div>

          {/* Quote text */}
          <p className="text-[24px] font-medium leading-[1.15] tracking-[-1px] text-[#0C0B0B] min-w-0">
            &quot;{testimonial.quote}&quot;
          </p>
        </div>

        {/* Bottom group */}
        <div className="flex flex-col gap-[4px] min-w-0">
          <span className="text-primary text-[20px] tracking-[-0.5px] leading-1 min-w-0">
            — {testimonial.name}
          </span>
          <div className="flex items-center gap-[4px] min-w-0">
            <span className="text-[14px] text-[#6C696D] min-w-0">
              {testimonial.location}
            </span>
          </div>
        </div>
      </div>

      {/* Right: image - fixed size allowed per rule 3 */}
      <div className="relative w-[218px] h-[264px] overflow-hidden shrink-0">
        <Image
          src={testimonial.imageUrl}
          alt={testimonial.name}
          fill
          className="object-cover"
          sizes="218px"
        />
      </div>
    </div>
  )
}
