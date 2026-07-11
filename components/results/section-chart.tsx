"use client"

import {
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
} from "recharts"

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import type { SectionResult } from "@/lib/scoring"

const config = {
  accuracy: {
    label: "Accuracy",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function SectionChart({ sections }: { sections: SectionResult[] }) {
  const data = sections.map((s) => ({
    section: s.name,
    accuracy: s.accuracy,
  }))

  return (
    <ChartContainer config={config} className="mx-auto aspect-square max-h-72 w-full">
      <RadarChart data={data} outerRadius="72%">
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent />}
        />
        <PolarGrid className="stroke-border" />
        <PolarAngleAxis
          dataKey="section"
          tick={{ fill: "var(--muted-foreground)", fontSize: 11 }}
        />
        <Radar
          dataKey="accuracy"
          fill="var(--color-accuracy)"
          fillOpacity={0.35}
          stroke="var(--color-accuracy)"
          strokeWidth={2}
          dot={{ r: 3, fillOpacity: 1 }}
        />
      </RadarChart>
    </ChartContainer>
  )
}
