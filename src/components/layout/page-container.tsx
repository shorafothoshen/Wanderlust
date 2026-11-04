export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[88px] max-w-[1280px] mx-auto px-4 md:px-10 xl:px-20">
      {children}
    </div>
  )
}
