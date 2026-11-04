export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={`mx-auto w-full max-w-[1440px] px-4 md:px-10 xl:px-20 ${className ?? ""}`}
    >
      {children}
    </div>
  )
}
