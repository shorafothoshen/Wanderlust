import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "My Profile | Wanderlast",
  description: "Manage your account settings and travel preferences",
};

export default function ProfilePage() {
  return (
    <PageContainer>
      <SectionHeading title="My Profile" subtitle="Manage your account settings and travel preferences" />
      <div className="mt-12">
        <p className="text-[#6B7280] text-[18px]">
          Profile settings coming soon.
        </p>
      </div>
    </PageContainer>
  );
}
