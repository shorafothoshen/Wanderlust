import { PageContainer } from "@/components/layout/page-container";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Create Account | Wanderlast",
  description: "Start your adventure with Wanderlust",
};

export default function SignupPage() {
  return (
    <PageContainer>
      <SectionHeading title="Create Account" subtitle="Start your adventure with Wanderlust" />
      <div className="mt-12">
        <p className="text-[#6B7280] text-[18px]">
          Sign up form coming soon.
        </p>
      </div>
    </PageContainer>
  );
}
