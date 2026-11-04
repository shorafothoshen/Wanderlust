import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Destination Details | Wanderlast",
};

interface DestinationDetailsProps {
  params: Promise<{ id: string }>;
}

export default function DestinationDetailsPage({
  params: _params,
}: DestinationDetailsProps) {
  return (
    <PageContainer>
      <SectionHeading title="Destination Details" subtitle="" />
      <div className="mt-12 flex gap-6">
        <button className="px-4 py-2 bg-primary text-white text-sm font-medium hover:bg-[#158fae] transition-colors">
          Back to Destinations
        </button>
        <button className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium border border-primary/30 hover:bg-primary/20 transition-colors">
          Edit
        </button>
        <button className="px-4 py-2 bg-[#0A0A0A]/10 text-[#0A0A0A] text-sm font-medium border border-[#0A0A0A]/20 hover:bg-[#0A0A0A]/20 transition-colors">
          Cancel
        </button>
      </div>
    </PageContainer>
  );
}
