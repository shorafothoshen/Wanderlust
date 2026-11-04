import { ShieldCheck, Map, Headset } from "lucide-react"
import { Container } from "@/components/ui/container"

const cards = [
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your safety is our priority with comprehensive travel insurance and 24/7 support.",
  },
  {
    icon: Map,
    title: "Expert Guides",
    description:
      "Local experts who bring destinations to life with authentic cultural insights.",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    description:
      "Round-the-clock customer service to assist you wherever your journey takes you.",
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-[#EBFBFF] py-16 md:py-20 xl:py-[120px] font-sans">
      <Container>
        <div className="text-center mb-10 md:mb-40">
          <h2 className="text-h2 font-normal text-[#0C0B0B] mb-[12px]">
            Why Choose Wanderlust
          </h2>
          <p className="text-lead text-[#6C696D]">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px]">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-b-1 border-[#E5E7EB] p-6 sm:p-10 hover:-translate-y-[4px] transition-transform duration-200 min-w-0"
            >
              <card.icon className="w-[40px] h-[40px] text-primary stroke-2" />
              <h3 className="mt-[20px] text-card-title font-light text-[#0C0B0B]">
                {card.title}
              </h3>
              <p className="mt-[12px] text-[16px] text-[#6C696D] leading-1.5">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
