"use client"

import { useCallback, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { TestimonialCard } from "@/components/shared/testimonial-card"
import { testimonials } from "@/lib/data/testimonials"
import { Container } from "@/components/ui/container"

const CARD_WIDTH = 628
const GAP = 24
const VISIBLE = 2
const SLIDE_DISTANCE = CARD_WIDTH + GAP

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const total = testimonials.length
  const maxPosition = Math.max(0, total - VISIBLE)

  const isFirst = current === 0
  const isLast = current >= maxPosition

  const handlePrev = useCallback(() => {
    if (!isFirst) {
      setCurrent((prev) => prev - 1)
    }
  }, [isFirst])

  const handleNext = useCallback(() => {
    if (!isLast) {
      setCurrent((prev) => prev + 1)
    }
  }, [isLast])

  const translateX = -current * SLIDE_DISTANCE

  return (
    <section className="bg-white py-16 md:py-20 xl:py-[120px] font-sans">
      <Container>
        {/* Header row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10 mb-10 md:mb-40"
        >
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 font-normal text-[#0C0B0B]">
              What Travelers Say
            </h2>
            <p className="text-lead text-[#6C696D]">
              Real experiences from our happy travelers
            </p>
          </div>
          <div className="flex items-center gap-16">
            <button
              onClick={handlePrev}
              disabled={isFirst}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                isFirst
                  ? "border-[#B6B6B6] opacity-40 cursor-not-allowed"
                  : "border-[#B6B6B6] hover:border-primary hover:text-primary"
              }`}
            >
              <ArrowLeft
                width={24}
                height={24}
                className={`text-[#0C0B0B] ${isFirst ? "opacity-40" : ""}`}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={isLast}
              className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors duration-200 ${
                isLast
                  ? "border-[#B6B6B6] opacity-40 cursor-not-allowed"
                  : "border-[#B6B6B6] hover:border-primary hover:text-primary"
              }`}
            >
              <ArrowRight
                width={24}
                height={24}
                className={`text-[#0C0B0B] ${isLast ? "opacity-40" : ""}`}
              />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          className="relative overflow-hidden w-full"
          style={{ transform: `translateX(${translateX}px)`, transition: "transform 400ms ease" }}
        >
          <div className="flex gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="shrink-0 basis-full lg:basis-[calc((100%-24px)/2)]">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
