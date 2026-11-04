import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Destinations | Wanderlast",
  description: "Find your perfect travel experience from our curated collection",
};

export default function DestinationsPage() {
  return (
    <PageContainer>
      <SectionHeading title="Explore All Destinations" subtitle="Find your perfect travel experience from our curated collection" />
      <div className="mt-12">
        <p className="text-[#6B7280] text-[18px]">
          Destination listings coming soon.
        </p>
      </div>
    </PageContainer>
  );
}
