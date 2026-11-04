"use client"
import { ArrowUpRight } from "lucide-react"

export function NewsletterForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[320px] h-12 bg-[#373737] px-0 flex items-center justify-between"
    >
      <input
        type="email"
        placeholder="Enter email"
        className="flex-1 h-full bg-transparent text-[#F2EAE6] text-[18px] placeholder-[#F2EAE6] outline-none border-none pr-16"
      />
      <button type="submit" className="w-12 h-full text-white">
        <ArrowUpRight width={24} height={24} />
      </button>
    </form>
  )
}
