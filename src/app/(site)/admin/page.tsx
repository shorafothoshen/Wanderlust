import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Add New Travel Package | Wanderlast",
};

export default function AdminPage() {
  return (
    <PageContainer>
      <SectionHeading title="Add New Travel Package" subtitle="" />
      <div className="mt-12">
        <p className="text-[#6B7280] text-[18px]">
          Admin panel coming soon.
        </p>
      </div>
    </PageContainer>
  );
}
