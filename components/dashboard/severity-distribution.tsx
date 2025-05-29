'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Critical", value: 5, color: "#DC2626" },
  { name: "High", value: 14, color: "#EA580C" },
  { name: "Medium", value: 27, color: "#D97706" },
  { name: "Low", value: 48, color: "#0EA5E9" },
];

export function SeverityDistribution() {
  return (
    <Card className="col-span-full lg:col-span-4 xl:col-span-5">
      <CardHeader>
        <CardTitle>Severity Distribution</CardTitle>
        <CardDescription>
          Distribution of vulnerabilities by severity level
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                wrapperStyle={{ paddingLeft: "10px" }}
              />
              <Tooltip 
                formatter={(value) => [`${value} vulnerabilities`, "Count"]} 
                labelFormatter={(name) => `Severity: ${name}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}