"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/atoms"
import { NumberTicker } from "@/components/atoms"

type StatCardProps = {
  value: number
  suffix?: string
  label: string
}

export function StatCard({ value, suffix = "", label }: StatCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          <NumberTicker value={value} />
          {suffix}
        </CardTitle>
        <CardDescription>{label}</CardDescription>
      </CardHeader>
    </Card>
  )
}

