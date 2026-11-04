"use client"

import { useEffect, useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import {
  Carousel,
  CarouselContent,
  useCarousel,
} from "@/components/ui/carousel"
import { DestinationCard } from "@/components/shared/destination-card"
import { destinations } from "@/lib/data/destinations"
import { Container } from "@/components/ui/container"

function CarouselControls() {
  const [current, setCurrent] = useState(0)
  const { api, scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel()

  const total = destinations.length

  useEffect(() => {
    if (!api) return
    const updateIndex = () => {
      const snapList = api.scrollSnapList()
      const prevSnap = api.previousScrollSnap()
      const index = snapList.indexOf(prevSnap)
      if (index !== -1) setCurrent(index)
    }
    updateIndex()
    api.on("select", updateIndex)
    return () => {
      api.off("select", updateIndex)
    }
  }, [api])

  const handlePrev = () => scrollPrev()
  const handleNext = () => scrollNext()

  return (
    <div className="mt-8 md:mt-10 flex items-center justify-between gap-20">
      <span className="text-[32px] leading-1 tracking-[-0.04em] text-primary">
        {current + 1}/{total}
      </span>
      <div className="flex-1 h-[1px] bg-[#D3D3D3]" />
      <div className="flex items-center gap-16">
        <button
          onClick={handlePrev}
          disabled={!canScrollPrev}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            !canScrollPrev
              ? "border-[#B6B6B6] opacity-40 cursor-not-allowed"
              : "border-[#B6B6B6] hover:border-primary hover:text-primary"
          }`}
        >
          <ArrowLeft
            width={24}
            height={24}
            className={`text-[#0C0B0B] ${!canScrollPrev ? "opacity-40" : ""}`}
          />
        </button>
        <button
          onClick={handleNext}
          disabled={!canScrollNext}
          className={`w-14 h-14 rounded-full border flex items-center justify-center transition-colors duration-200 ${
            !canScrollNext
              ? "border-[#B6B6B6] opacity-40 cursor-not-allowed"
              : "border-[#B6B6B6] hover:border-primary hover:text-primary"
          }`}
        >
          <ArrowRight
            width={24}
            height={24}
            className={`text-[#0C0B0B] ${!canScrollNext ? "opacity-40" : ""}`}
          />
        </button>
      </div>
    </div>
  )
}

export function FeaturedDestinations() {
  return (
    <section className="bg-white py-16 md:py-20 xl:py-[120px] font-sans">
      <Container>
        {/* Header row */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-10 mb-10 md:mb-40"
        >
          <div className="flex flex-col gap-8">
            <h2 className="text-h2 font-normal text-[#0C0B0B]">
              Featured Destinations
            </h2>
            <p className="text-lead text-[#6C696D]">
              Handpicked travel experiences for the adventure seekers
            </p>
          </div>
          <Link
            href="/destinations"
            className="flex items-center gap-24 px-[24px] py-[16px] w-[243px] h-14 border border-primary bg-white text-primary text-[16px] font-medium uppercase tracking-[0.5px] rounded-none hover:bg-primary hover:text-white transition-colors duration-200"
          >
            ALL DESTINATIONS
            <ArrowRight width={20} height={20} />
          </Link>
        </div>

        {/* Cards slider */}
        <div className="relative overflow-hidden w-full">
          <Carousel opts={{ containScroll: "trimSnaps", loop: false }}>
            <CarouselContent className="flex gap-6">
              {destinations.map((dest) => (
                <div
                  key={dest.id}
                  className="shrink-0 basis-full lg:basis-[calc((100%-24px)/2)]"
                >
                  <DestinationCard destination={dest} />
                </div>
              ))}
            </CarouselContent>
            <CarouselControls />
          </Carousel>
        </div>
      </Container>
    </section>
  )
}
