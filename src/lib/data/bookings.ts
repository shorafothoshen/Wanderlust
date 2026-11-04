import type { Booking } from "@/types/booking"

export const bookings: Booking[] = [
  {
    id: "b1",
    destinationName: "Bali, Indonesia",
    departureDate: "2026-12-15",
    bookingId: "WL-1001",
    price: 1200,
    status: "Confirmed",
  },
  {
    id: "b2",
    destinationName: "Santorini, Greece",
    departureDate: "2026-11-20",
    bookingId: "WL-1002",
    price: 1500,
    status: "Pending",
  },
]
