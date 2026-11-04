import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/layout/navbar"
import { SearchBar } from "@/components/ui/search-bar"
import { Container } from "@/components/ui/container"

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-[640px] md:min-h-[746px] flex-col overflow-hidden bg-white"
    >
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt="Turquoise cove with green forest and red-roofed villas"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover object-center w-full h-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-black/40 w-full h-full" />

      {/* Floating navbar */}
      <Navbar />

      {/* Centered hero content */}
      <div className="flex flex-1 items-center justify-center pt-[88px] pb-10 px-4 text-center">
        <Container className="flex flex-col items-center gap-10 max-w-[662px] mx-auto">
          <h1
            className="text-display font-normal text-white tracking-[-0.03em]"
          >
            Discover Your<br /> Next Adventure
          </h1>
          <p className="text-lead text-white max-w-full">
            Explore breathtaking destinations and create unforgettable memories
            with our curated travel experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <button className="px-6 py-[18px] bg-primary text-white text-[16px] font-medium uppercase rounded-none hover:bg-[#158fae] transition-colors duration-200 flex items-center gap-2">
              EXPLORE NOW
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-[18px] bg-white/25 text-white text-[16px] font-medium uppercase rounded-none border border-white/50 hover:bg-white/30 transition-colors duration-200">
              VIEW DESTINATION
            </button>
          </div>
        </Container>
      </div>

      {/* Search bar at bottom - normal flow, not absolute */}
      <SearchBar />
    </section>
  )
}
