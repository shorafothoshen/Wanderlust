"use client"
import { useState } from "react"

type SearchValues = {
  location: string
  date: string
  budget: string
  people: string
}

const fields: Array<{ key: keyof SearchValues; label: string; placeholder: string; type: string }> = [
  { key: "location", label: "Location", placeholder: "Address, City Or Zip", type: "text" },
  { key: "date", label: "Date/Duration", placeholder: "Anytime/3 Days", type: "text" },
  { key: "budget", label: "Budget", placeholder: "$0-$3000", type: "text" },
  { key: "people", label: "People", placeholder: "5-10", type: "text" },
]

export function SearchBar({ onSubmit }: { onSubmit?: (values: SearchValues) => void }) {
  const [values, setValues] = useState<SearchValues>({
    location: "",
    date: "",
    budget: "",
    people: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(values)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full font-sans"
    >
      <div className="h-[74px] bg-[rgba(120,120,120,0.55)] backdrop-blur flex items-center"
        style={{ backgroundColor: "rgba(120,120,120,0.55)" }}
      >
        {fields.map((field) => (
          <div
            key={field.key}
            className="flex-1 min-w-0 border-r border-white/40 last:border-0 flex flex-col items-start pl-6"
          >
            <label className="text-[20px] font-medium text-white mb-1">
              {field.label}
            </label>
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={values[field.key]}
              onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
              className="flex-1 bg-transparent text-white/90 text-[14px] font-normal outline-none placeholder-white/70 w-full"
            />
          </div>
        ))}
        <button
          type="submit"
          className="w-[200px] h-full bg-primary text-white text-[20px] font-semibold hover:bg-[#158fae] transition-colors duration-200"
        >
          Search
        </button>
      </div>
    </form>
  )
}
