import * as React from "react";
import { Cell, Label, Pie, PieChart as RechartsPieChart } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./chart";
import { cn } from "../../lib/utils";

export interface PieChartProps {
  data: Array<Record<string, any>>;
  dataKey: string;
  nameKey?: string;
  config?: ChartConfig;
  title?: string;
  height?: number;
  showLegend?: boolean;
  showTooltip?: boolean;
  colors?: string[];
  innerRadius?: number | string;
  outerRadius?: number | string;
  showCenterLabel?: boolean;
  centerLabelText?: string;
  centerLabelSubtext?: string;
  strokeWidth?: number;
  className?: string;
}

export const PieChart = React.forwardRef<HTMLDivElement, PieChartProps>(
  (
    {
      data,
      dataKey,
      nameKey = "name",
      config,
      title,
      height = 400,
      showLegend = true,
      showTooltip = true,
      colors = [
        "#02514e",
        "#cce6c8",
        "#dff4ed",
        "#8cd5b4",
        "#68c0a0",
        "#44ab8c",
        "#629a95",
        "#a3cac4",
      ],
      innerRadius = 0,
      outerRadius = "80%",
      showCenterLabel = false,
      centerLabelText,
      centerLabelSubtext,
      strokeWidth = 2,
      className,
      ...props
    },
    ref
  ) => {
    const totalValue = React.useMemo(() => {
      return data.reduce((acc, curr) => acc + (curr[dataKey] || 0), 0);
    }, [data, dataKey]);

    const renderCenterLabel = ({ viewBox }: any) => {
      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
        return (
          <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
            <tspan
              x={viewBox.cx}
              y={viewBox.cy}
              className="ds-pie-chart__center-label"
              style={{
                fill: "#0b1f1e",
                fontSize: "20px",
                fontWeight: 600,
                fontFamily: "Source Serif Pro",
              }}
            >
              {centerLabelText || totalValue.toLocaleString()}
            </tspan>
            {centerLabelSubtext && (
              <tspan
                x={viewBox.cx}
                y={(viewBox.cy || 0) + 18}
                className="ds-pie-chart__center-sublabel"
                style={{
                  fill: "#373734",
                  fontSize: "11px",
                  fontFamily: "Noto Sans, sans-serif",
                }}
              >
                {centerLabelSubtext}
              </tspan>
            )}
          </text>
        );
      }
      return null;
    };

    return (
      <div ref={ref} className={cn("ds-pie-chart", className)} {...props}>
        {title && (
          <h3
            className="ds-pie-chart__title"
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
        <ChartContainer config={config || {}} className="w-full" style={{ height }}>
          <RechartsPieChart>
            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              cx="50%"
              cy="50%"
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              strokeWidth={strokeWidth}
              stroke="#fbfaf8"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill || colors[index % colors.length]} />
              ))}
              {showCenterLabel && innerRadius !== 0 && (
                <Label content={renderCenterLabel} position="center" />
              )}
            </Pie>
            {showTooltip && <ChartTooltip content={<ChartTooltipContent />} />}
          </RechartsPieChart>
        </ChartContainer>
      </div>
    );
  }
);

PieChart.displayName = "PieChart";

