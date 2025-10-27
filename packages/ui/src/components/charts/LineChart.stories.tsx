import { Meta, StoryFn } from "@storybook/react";
import * as React from "react";
import { LineChart } from "../ui/line-chart";
import { ChartConfig } from "../ui/chart";

// Monthly revenue data
const monthlyRevenueData = [
  { month: "Jan", revenue: 4000.0 },
  { month: "Feb", revenue: 3000.0 },
  { month: "Mar", revenue: 5000.0 },
  { month: "Apr", revenue: 4500.0 },
  { month: "May", revenue: 6000.0 },
  { month: "Jun", revenue: 5500.0 },
  { month: "Jul", revenue: 7000.0 },
  { month: "Aug", revenue: 6500.0 },
  { month: "Sep", revenue: 8000.0 },
  { month: "Oct", revenue: 7500.0 },
  { month: "Nov", revenue: 9000.0 },
  { month: "Dec", revenue: 8500.0 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#02514e",
  },
} satisfies ChartConfig;

const meta: Meta<typeof LineChart> = {
  title: "Data Visualization/Line Chart",
  component: LineChart,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: `The Line Chart component provides a flexible way to visualize trends and time-series data. Built with Recharts and styled to match the design system.`,
      },
    },
  },
  argTypes: {
    dataKey: {
      control: "text",
      description: "Key for the data values",
    },
    categoryKey: {
      control: "text",
      description: "Key for the category labels (e.g., 'month')",
    },
    title: {
      control: "text",
      description: "Chart title",
    },
    height: {
      control: "number",
      description: "Chart height in pixels",
    },
    showGrid: {
      control: "boolean",
      description: "Show grid lines",
    },
    showLegend: {
      control: "boolean",
      description: "Show legend",
    },
    showTooltip: {
      control: "boolean",
      description: "Show tooltip on hover",
    },
    lineColor: {
      control: "color",
      description: "Primary line color",
    },
    secondaryLineKey: {
      control: "text",
      description: "Secondary data key for multiple lines",
    },
    secondaryLineColor: {
      control: "color",
      description: "Secondary line color",
    },
    strokeWidth: {
      control: "number",
      description: "Line stroke width",
    },
    curveType: {
      control: "select",
      options: ["monotone", "linear", "natural", "step"],
      description: "Curve type (monotone, linear, natural, step)",
    },
  },
};

export default meta;

const Template: StoryFn<typeof LineChart> = (args) => (
  <div className="w-full max-w-4xl">
    <LineChart {...args} config={chartConfig} />
  </div>
);

// Default story - Monthly Revenue
export const Default = Template.bind({});
Default.args = {
  data: monthlyRevenueData,
  dataKey: "revenue",
  categoryKey: "month",
  title: "Monthly Revenue",
  height: 400,
  showGrid: true,
  showLegend: false,
  showTooltip: true,
  lineColor: "#02514e",
  strokeWidth: 2,
  curveType: "monotone",
};
Default.parameters = {
  docs: {
    description: {
      story: `A line chart showing monthly revenue trends over 12 months.`,
    },
  },
};

// Multiple Lines
const multipleLineData = monthlyRevenueData.map((d) => ({ ...d, expenses: d.revenue * 0.7, profit: d.revenue * 0.3 }));

export const MultipleLines = Template.bind({});
MultipleLines.args = {
  data: multipleLineData,
  dataKey: "revenue",
  secondaryLineKey: "expenses",
  categoryKey: "month",
  title: "Revenue vs Expenses",
  height: 400,
  showGrid: true,
  showLegend: false,
  showTooltip: true,
  lineColor: "#02514e",
  secondaryLineColor: "#cce6c8",
  strokeWidth: 2,
};
MultipleLines.parameters = {
  docs: {
    description: {
      story: `A line chart with multiple lines showing revenue and expenses over time.`,
    },
  },
};

// Different Curve Types
export const CurveTypes = () => (
  <div className="space-y-8 w-full max-w-4xl">
    <LineChart
      data={monthlyRevenueData}
      dataKey="revenue"
      categoryKey="month"
      title="Monotone Curve"
      config={chartConfig}
      lineColor="#02514e"
      curveType="monotone"
    />
    <LineChart
      data={monthlyRevenueData}
      dataKey="revenue"
      categoryKey="month"
      title="Linear Curve"
      config={chartConfig}
      lineColor="#02514e"
      curveType="linear"
    />
    <LineChart
      data={monthlyRevenueData}
      dataKey="revenue"
      categoryKey="month"
      title="Natural Curve"
      config={chartConfig}
      lineColor="#02514e"
      curveType="natural"
    />
    <LineChart
      data={monthlyRevenueData}
      dataKey="revenue"
      categoryKey="month"
      title="Step Curve"
      config={chartConfig}
      lineColor="#02514e"
      curveType="step"
    />
  </div>
);
CurveTypes.parameters = {
  docs: {
    description: {
      story: `Demonstrates different curve interpolation types for the line chart.`,
    },
  },
};

// Documentation
export const Documentation = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-4">Line Chart Documentation</h1>
    <p className="text-gray-600 mb-8">
      The Line Chart component provides a flexible way to visualize trends and time-series data.
      Built with Recharts and styled to match the design system.
    </p>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>
        <strong>Responsive</strong>: Automatically adjusts to container width
      </li>
      <li>
        <strong>Customizable Curves</strong>: Supports various curve types (monotone, natural, linear, step)
      </li>
      <li>
        <strong>Multiple Lines</strong>: Can display multiple data series
      </li>
      <li>
        <strong>Interactive Tooltips</strong>: Shows detailed data on hover
      </li>
      <li>
        <strong>Active Dots</strong>: Highlights data points on hover
      </li>
      <li>
        <strong>Clean Grid</strong>: Displays horizontal gridlines for readability
      </li>
      <li>
        <strong>Design System Colors</strong>: Integrates seamlessly with your design tokens
      </li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
    <ul className="list-disc list-inside text-gray-700 mb-8 space-y-2">
      <li>Use for visualizing trends over time or continuous data</li>
      <li>Ensure sufficient contrast between multiple lines</li>
      <li>Avoid using too many lines to prevent clutter</li>
      <li>Use clear and concise titles and labels</li>
      <li>Consider the baseline: start the Y-axis at zero for accurate comparisons</li>
      <li>Use tooltips to provide precise data values on demand</li>
    </ul>

    <h2 className="text-2xl font-bold text-gray-900 mb-4">Usage</h2>
    <div className="bg-gray-50 rounded-lg p-6">
      <pre className="text-sm text-gray-700">
        {`import { LineChart } from "ui/components/ui/line-chart";
import { ChartConfig } from "ui/components/ui/chart";

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 3000 },
  // ...
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "#02514e",
  },
} satisfies ChartConfig;

function MyComponent() {
  return (
    <LineChart
      data={data}
      dataKey="revenue"
      categoryKey="month"
      title="Monthly Revenue"
      config={chartConfig}
    />
  );
}`}
      </pre>
    </div>
  </div>
);

