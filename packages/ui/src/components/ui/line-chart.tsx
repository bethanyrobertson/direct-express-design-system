import * as React from "react";
import { CartesianGrid, Line, LineChart as RechartsLineChart, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import { cn } from "../../lib/utils";

export interface LineChartProps {
  data: Array<Record<string, any>>;
  dataKey: string;
  categoryKey?: string;
  config: ChartConfig;
  title?: string;
  height?: number;
  showGrid?: boolean;
  showLegend?: boolean;
  showTooltip?: boolean;
  lineColor?: string;
  secondaryLineKey?: string;
  secondaryLineColor?: string;
  strokeWidth?: number;
  curveType?: "monotone" | "linear" | "natural" | "step";
  className?: string;
}

export const LineChart = React.forwardRef<HTMLDivElement, LineChartProps>(
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
      lineColor = "#02514e",
      secondaryLineKey,
      secondaryLineColor = "#cce6c8",
      strokeWidth = 2,
      curveType = "monotone",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("ds-line-chart", className)} {...props}>
        {title && (
          <h3
            className="ds-line-chart__title"
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
          <RechartsLineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            {showGrid && (
              <CartesianGrid strokeDasharray="3 3" stroke="#acb4a2" opacity={0.3} vertical={false} />
            )}
            <XAxis
              dataKey={categoryKey}
              tick={{ fill: "#0b1f1e", fontSize: 10, fontFamily: "Noto Sans, sans-serif" }}
              stroke="#acb4a2"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
            />
            <YAxis
              tick={{ fill: "#0b1f1e", fontSize: 12, fontFamily: "Noto Sans, sans-serif" }}
              stroke="#acb4a2"
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value.toLocaleString()}`}
            />
            {showTooltip && (
              <ChartTooltip cursor={{ stroke: "#cce6c8", strokeWidth: 1, strokeDasharray: "3 3" }} content={<ChartTooltipContent />} />
            )}
            <Line
              type={curveType}
              dataKey={dataKey}
              stroke={lineColor}
              strokeWidth={strokeWidth}
              dot={{ fill: lineColor, r: 4 }}
              activeDot={{ r: 6, fill: lineColor, stroke: "#cce6c8", strokeWidth: 3 }}
            />
            {secondaryLineKey && (
              <Line
                type={curveType}
                dataKey={secondaryLineKey}
                stroke={secondaryLineColor}
                strokeWidth={strokeWidth}
                dot={{ fill: secondaryLineColor, r: 4 }}
                activeDot={{ r: 6, fill: secondaryLineColor, stroke: "#cce6c8", strokeWidth: 3 }}
              />
            )}
          </RechartsLineChart>
        </ChartContainer>
      </div>
    );
  }
);

LineChart.displayName = "LineChart";

