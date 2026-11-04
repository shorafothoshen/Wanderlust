import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 md:py-20 xl:py-[120px] font-sans">
      <Image
        src="/images/cta.jpg"
        alt="CTA background"
        fill
        priority
        className="absolute inset-0 -z-10 object-cover object-center w-full h-full"
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#1A1A1A] via-[rgba(26,26,26,0.4)] to-[#1A1A1A] 51%" />
      <Container>
        <div className="flex flex-col items-center text-center gap-[12px]">
          <h2 className="text-[clamp(34px,4.2vw,60px)] font-normal leading-[1.05] tracking-[-0.04em] text-white">
            Ready to Start Your Journey?
          </h2>
          <p className="text-[clamp(16px,1.4vw,20px)] leading-[32px] text-white max-w-[660px] mx-auto">
            Join thousands of travelers who have discovered the world with us
          </p>
        </div>
        <Link
          href="/destinations"
          className="flex items-center gap-[24px] px-[24px] py-[16px] w-[279px] h-[56px] bg-white text-[#0C0B0B] text-[16px] font-medium uppercase tracking-[0.5px] rounded-none hover:bg-primary hover:text-white transition-colors duration-200"
        >
          BOOK YOUR TRIP TODAY
          <ArrowRight width={20} height={20} />
        </Link>
      </Container>
    </section>
  )
}
