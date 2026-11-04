export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/my-bookings", label: "My Bookings" },
  { href: "/admin", label: "Admin" },
] as const

export const RIGHT_NAV_LINKS = [
  { href: "/profile", label: "Profile" },
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
] as const

export const FOOTER_LINKS = {
  quickLinks: [
    { href: "/", label: "Home" },
    { href: "/destinations", label: "Destinations" },
    { href: "/my-bookings", label: "My Bookings" },
    { href: "/profile", label: "My Profile" },
  ],
  support: [
    { href: "#", label: "Help Center" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Privacy Policy" },
  ],
} as const

export const CONTACT = {
  phone: "786 901 1622",
  email: "info@wandarland.com",
}

export const FOOTER_BRAND_DESC =
  "Your gateway to extraordinary travel experiences around the world."

export const NEWSLETTER_LABEL = "NEWSLETTER"
export const NEWSLETTER_DESC =
  "Subscribe for exclusive travel deals and inspiration."
