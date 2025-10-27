import * as React from "react";
import { Area, AreaChart as RechartsAreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import { cn } from "../../lib/utils";

export interface AreaChartProps {
  data: Array<Record<string, any>>;
  dataKey: string;
  categoryKey?: string;
  config: ChartConfig;
  title?: string;
  height?: number;
  showGrid?: boolean;
  showTooltip?: boolean;
  areaColor?: string;
  fillColor?: string;
  fillOpacity?: number;
  secondaryAreaKey?: string;
  secondaryAreaColor?: string;
  stackAreas?: boolean;
  curveType?: "monotone" | "linear" | "natural" | "step";
  strokeWidth?: number;
  className?: string;
}

export const AreaChart = React.forwardRef<HTMLDivElement, AreaChartProps>(
  (
    {
      data,
      dataKey,
      categoryKey = "name",
      config,
      title,
      height = 400,
      showGrid = true,
      showTooltip = true,
      areaColor = "#02514e",
      fillColor,
      fillOpacity = 0.4,
      secondaryAreaKey,
      secondaryAreaColor = "#cce6c8",
      stackAreas = false,
      curveType = "monotone",
      strokeWidth = 2,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("ds-area-chart", className)} {...props}>
        {title && (
          <h3 className="ds-area-chart__title" style={{ fontFamily: 'Source Serif Pro', fontSize: '24px', fontWeight: 600, color: '#01332E', margin: '0 0 24px 0', textAlign: 'left' }}>
            {title}
          </h3>
        )}
        <ChartContainer config={config} className="w-full" style={{ height }}>
          <RechartsAreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
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
              tick={{ fill: "#0b1f1e", fontSize: 10 }}
              stroke="#acb4a2"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
            />
            <YAxis
              tick={{ fill: "#0b1f1e", fontSize: 12 }}
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
            {secondaryAreaKey && (
              <Area
                type={curveType}
                dataKey={secondaryAreaKey}
                stroke={secondaryAreaColor}
                fill={secondaryAreaColor}
                fillOpacity={fillOpacity}
                strokeWidth={strokeWidth}
                stackId={stackAreas ? "a" : undefined}
                dot={false}
                activeDot={{ r: 5, fill: secondaryAreaColor, stroke: "#cce6c8", strokeWidth: 2 }}
              />
            )}
            <Area
              type={curveType}
              dataKey={dataKey}
              stroke={areaColor}
              fill={fillColor || areaColor}
              fillOpacity={fillOpacity}
              strokeWidth={strokeWidth}
              stackId={stackAreas ? "a" : undefined}
              dot={false}
              activeDot={{ r: 5, fill: areaColor, stroke: "#cce6c8", strokeWidth: 2 }}
            />
          </RechartsAreaChart>
        </ChartContainer>
      </div>
    );
  }
);

AreaChart.displayName = "AreaChart";

