export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="text-center mb-[48px]">
      <h2
        className="text-[#0A0A0A] text-[56px] font-light leading-[1.1] tracking-[-0.02em] mb-[12px]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#6B7280] text-[18px] font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
