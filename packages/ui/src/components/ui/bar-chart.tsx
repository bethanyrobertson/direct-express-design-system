import * as React from "react";
import { Bar, BarChart as RechartsBarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import { cn } from "../../lib/utils";

export interface BarChartProps {
  data: Array<Record<string, any>>;
  dataKey: string;
  categoryKey?: string;
  config: ChartConfig;
  title?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  barColor?: string;
  secondaryBarKey?: string;
  secondaryBarColor?: string;
  barRadius?: number | [number, number, number, number];
  className?: string;
}

export const BarChart = React.forwardRef<HTMLDivElement, BarChartProps>(
  (
    {
      data,
      dataKey,
      categoryKey = "name",
      config,
      title,
      height = 400,
      showGrid = true,
      showLegend = false,
      showTooltip = true,
      barColor = "#02514e",
      secondaryBarKey,
      secondaryBarColor = "#cce6c8",
      barRadius = [4, 4, 0, 0],
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("ds-bar-chart", className)} {...props}>
        {title && (
          <h3
            className="ds-bar-chart__title"
            style={{
              fontFamily: "Source Serif Pro",
              fontSize: "24px",
              fontWeight: 600,
              color: "#01332E",
              margin: "0 0 24px 0",
              textAlign: "left",
            }}
          >
            {title}
          </h3>
        )}
        <ChartContainer config={config} className="w-full" style={{ height }}>
          <RechartsBarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            {showGrid && (
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#acb4a2"
                opacity={0.3}
                vertical={false}
              />
            )}
            <XAxis
              dataKey={categoryKey}
              tick={{ fill: "#0b1f1e", fontSize: 10, fontFamily: "Noto Sans, sans-serif" }}
              stroke="#acb4a2"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
            />
            <YAxis
              tick={{ fill: "#0b1f1e", fontSize: 12, fontFamily: "Noto Sans, sans-serif" }}
              stroke="#acb4a2"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            {showTooltip && (
              <ChartTooltip
                cursor={{ stroke: "#cce6c8", strokeWidth: 1, strokeDasharray: "3 3" }}
                content={<ChartTooltipContent />}
              />
            )}
            <Bar dataKey={dataKey} fill={barColor} radius={barRadius} />
            {secondaryBarKey && (
              <Bar dataKey={secondaryBarKey} fill={secondaryBarColor} radius={barRadius} />
            )}
          </RechartsBarChart>
        </ChartContainer>
      </div>
    );
  }
);

BarChart.displayName = "BarChart";

