import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "My Bookings | Wanderlast",
  description: "Manage and view your upcoming travel plans",
};

export default function MyBookingsPage() {
  return (
    <PageContainer>
      <SectionHeading title="My Bookings" subtitle="Manage and view your upcoming travel plans" />
      <div className="mt-12">
        <p className="text-[#6B7280] text-[18px]">
          Your bookings will appear here.
        </p>
      </div>
    </PageContainer>
  );
}
