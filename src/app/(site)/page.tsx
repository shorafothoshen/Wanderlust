import { Hero } from "@/components/ui/hero"
import { FeaturedDestinations } from "@/components/sections/home/featured-destinations"
import { WhyChooseUs } from "@/components/ui/why-choose-us"
import { Testimonials } from "@/components/sections/home/testimonials"
import { CTA } from "@/components/sections/home/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDestinations />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
    </>
  )
}
