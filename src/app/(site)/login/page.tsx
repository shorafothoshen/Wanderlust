import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Welcome Back | Wanderlast",
  description: "Resume your adventure with Wanderlust",
};

export default function LoginPage() {
  return (
    <PageContainer>
      <SectionHeading title="Welcome Back" subtitle="Resume your adventure with Wanderlust" />
      <div className="mt-12">
        <p className="text-[#6B7280] text-[18px]">
          Login form coming soon.
        </p>
      </div>
    </PageContainer>
  );
}
