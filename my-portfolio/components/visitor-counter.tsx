"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null)

  useEffect(() => {
    const controller = new AbortController()

    async function recordVisit() {
      try {
        const response = await fetch("/api/visitors", {
          method: "POST",
          cache: "no-store",
          signal: controller.signal,
        })

        if (!response.ok) return

        const data: { visitors: number } = await response.json()
        setVisitors(data.visitors)
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Unable to load visitor count", error)
        }
      }
    }

    recordVisit()

    return () => controller.abort()
  }, [])

  if (visitors === null) return null

  return (
    <span className="flex items-center gap-2" aria-live="polite">
      <Eye className="h-4 w-4" aria-hidden="true" />
      {visitors.toLocaleString()} visits
    </span>
  )
}
