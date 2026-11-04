import Link from "next/link"
import { NewsletterForm } from "@/components/layout/newsletter-form"
import { XIcon, LinkedInIcon, InstagramIcon } from "@/components/ui/social-icons"
import {
  FOOTER_LINKS,
  CONTACT,
  FOOTER_BRAND_DESC,
  NEWSLETTER_LABEL,
  NEWSLETTER_DESC,
} from "@/lib/constants"
import { Container } from "@/components/ui/container"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0C0B0B] text-white font-sans py-16 md:py-20 xl:py-[120px] pb-[32px]">
      <Container>
        {/* Top section: Brand + columns */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-[56px]">
          {/* Brand block */}
          <div className="flex flex-col gap-16 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[clamp(48px,7vw,96px)] font-semibold text-primary tracking-tight">
                Wanderlast
              </span>
            </div>
            <p className="text-[#F2EAE6] text-[20px] leading-[32px] max-w-[280px]">
              {FOOTER_BRAND_DESC}
            </p>
          </div>

          {/* Link columns grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[400px_1fr_1fr_1fr] gap-10 lg:gap-[60px] w-full"
          >
            {/* Column 1: Newsletter */}
            <div className="flex flex-col gap-8 min-w-0">
              <h3 className="text-primary text-[20px] font-medium tracking-[0.5px] leading-1 mb-[16px]">
                {NEWSLETTER_LABEL}
              </h3>
              <p className="text-[#F2EAE6] text-[14px] leading-[20px] max-w-[260px]">
                {NEWSLETTER_DESC}
              </p>
              <NewsletterForm />
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col gap-[16px] min-w-0">
              <h3 className="text-white text-[20px] font-medium tracking-[0.5px] leading-1 mb-[16px]">
                Quick Links
              </h3>
              <ul className="space-y-0">
                {FOOTER_LINKS.quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#F2EAE6] text-[18px] leading-[40px] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div className="flex flex-col gap-[16px] min-w-0">
              <h3 className="text-white text-[20px] font-medium tracking-[0.5px] leading-1 mb-[16px]">
                Support
              </h3>
              <ul className="space-y-0">
                {FOOTER_LINKS.support.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[#F2EAE6] text-[18px] leading-[40px] hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Us */}
            <div className="flex flex-col gap-[16px] min-w-0">
              <h3 className="text-white text-[20px] font-medium tracking-[0.5px] leading-1 mb-[16px]">
                Contact Us
              </h3>
              <ul className="space-y-0">
                <li>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="text-[#F2EAE6] text-[18px] leading-[40px] hover:text-primary transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-[#F2EAE6] text-[18px] leading-[40px] hover:text-primary transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[56px] border-t border-[#8A6C60] pt-[32px]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-[#F2EAE6] text-[14px]">
              © {year} Wanderlast. All rights reserved.
            </p>
            <div className="flex items-center gap-32">
              <a href="#" className="text-[#E0E4EB] hover:text-primary transition-colors">
                <XIcon />
              </a>
              <a href="#" className="text-[#E0E4EB] hover:text-primary transition-colors">
                <LinkedInIcon />
              </a>
              <a href="#" className="text-[#E0E4EB] hover:text-primary transition-colors">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
