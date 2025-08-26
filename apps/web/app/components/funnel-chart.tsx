"use client"

import { FunnelChart as RechartsFunnelChart, Funnel, Cell, ResponsiveContainer, LabelList } from "recharts"

const data = [
  { name: "Leads", value: 1000, fill: "#6366f1" },
  { name: "Warm", value: 400, fill: "#f59e0b" },
  { name: "Hot", value: 150, fill: "#f97316" },
  { name: "Ventas", value: 75, fill: "#dc2626" },
]

export function FunnelChart() {
  return (
    <div className="h-48 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsFunnelChart>
          <Funnel dataKey="value" data={data} isAnimationActive>
            <LabelList position="center" fill="#fff" stroke="none" fontSize={12} />
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Funnel>
        </RechartsFunnelChart>
      </ResponsiveContainer>
    </div>
  )
}
